import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import CardCartProduct from "../CardCartProduct";
import * as Dialog from "@radix-ui/react-dialog";
import { XCircle } from "@phosphor-icons/react";
import {
  CartItemsContainer,
  CloseButton,
  Content,
  NoProductsContainer,
  OrderSummary,
  Overlay,
  SubmitOrderButton,
} from "./style";
import ShoppingBag from "../../assets/shopping_bag.png";

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
            <SubmitOrderButton
              onClick={handleFinishCart}
              disabled={isCreatingCheckoutSession}
              isLoading={isCreatingCheckoutSession}
            >
              {isCreatingCheckoutSession ? "Carregando..." : "Finalizar Compra"}
            </SubmitOrderButton>
          </>
        ) : (
          <NoProductsContainer>
            <h2>Não há produtos no carrinho</h2>
            <Image src={ShoppingBag} alt='' width={500} height={700} />
          </NoProductsContainer>
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
