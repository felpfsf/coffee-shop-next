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

const CartModal = () => {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + item.quantity * Number(item.product.price);
  }, 0);
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
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
            <SubmitOrderButton>Finalizar Compra</SubmitOrderButton>
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
