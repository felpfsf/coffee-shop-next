import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./style";
import { XCircle } from "@phosphor-icons/react";
import { useCart } from "../../context/CartContext";

const CartModal = () => {
  const { cartItems } = useCart();
  /**
   * TODO:
   *
   * [x] - SOMAR O VALOR TOTAL DE PRODUTOS
   *
   * [] - EXIBIR O CARD COM BOTÕES DE ADICIONAR MAIS ITENS
   *      E REMOVER DO CARRINHO
   */
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + item.quantity * Number(item.product.price);
  }, 0);
  console.log(cartItems.map(item => item.product.price))
  console.log(subtotal)
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <h1>CartModal</h1>
        <div>
          {cartItems.map((item) => (
            <p key={item.product.id}>
              {item.product.name} unidades:<span>{item.quantity}</span>
            </p>
          ))}
        </div>
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
