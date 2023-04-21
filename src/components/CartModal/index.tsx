import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import CardCartProduct from "../CardCartProduct";
import * as Dialog from "@radix-ui/react-dialog";
import { XCircle } from "@phosphor-icons/react";
import {
  CartItemsContainer,
  CloseButton,
  Content,
  OrderSummary,
  Overlay,
  SubmitOrderButton,
} from "./style";
import axios from "axios";
import { useState } from "react";

const CartModal = () => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );
  const handleFinishCart = async () => {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        cartItems,
      });
      const checkoutUrl = response.data.checkoutUrl;
      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar");
      console.error(error);
    }
  };
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <h1>Seu Carrinho:</h1>
        {cartItems.length > 0 ? (
          <>
            <CartItemsContainer>
              {cartItems.map((item) => (
                <CardCartProduct
                  key={item.product.id}
                  {...item.product}
                  quantity={item.quantity}
                />
              ))}
            </CartItemsContainer>
            <OrderSummary>
              <h1>Total</h1>
              <strong>{formatCurrency.format(subtotal)}</strong>
            </OrderSummary>
            <SubmitOrderButton onClick={handleFinishCart}>
              Finalizar Compra
            </SubmitOrderButton>
          </>
        ) : (
          <h1>Não Produtos no carrinho</h1>
        )}
        <Dialog.Close asChild>
          <CloseButton>
            <XCircle size={24} weight='fill' />
          </CloseButton>
        </Dialog.Close>
      </Content>
    </Dialog.Portal>
  );
};

export default CartModal;
