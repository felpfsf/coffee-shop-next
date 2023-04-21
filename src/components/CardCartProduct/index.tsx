import Image from "next/image";
import { formatCurrency } from "../../utils/formatCurrency";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  ActionsContainer,
  CardWrapper,
  CartProductContainer,
  RemoveFromCartButton,
} from "./styles";
import { useCart } from "../../context/CartContext";
import { Product } from "../../utils/types";

interface ProductProps extends Product {
  quantity: number;
}

const CardCartProduct = (product: ProductProps) => {
  const { removeFromCart, updateCartItems } = useCart();

  const decrement = () => {
    const newQuantity = product.quantity - 1;
    // Caso o valor for reduzido a 0 então o item é removido do carrinho
    if (newQuantity === 0) {
      removeFromCart(product);
    } else {
      updateCartItems(product.id, newQuantity);
    }
  };
  const increment = () => {
    const newQuantity = product.quantity + 1;
    updateCartItems(product.id, newQuantity);
  };
  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };
  return (
    <CartProductContainer>
      <CardWrapper>
        <Image
          src={product.imageUrl}
          alt={`Imagem de ${name}`}
          width={64}
          height={64}
        />
        <div>
          <h2>{product.name}</h2>
          <ActionsContainer>
            <div>
              <button onClick={decrement}>
                <Minus />
              </button>
              <span>{product.quantity}</span>
              <button onClick={increment}>
                <Plus />
              </button>
            </div>
            <RemoveFromCartButton onClick={handleRemoveFromCart}>
              <Trash />
              Remover
            </RemoveFromCartButton>
          </ActionsContainer>
        </div>
      </CardWrapper>
      <strong>{formatCurrency.format(product.price)}</strong>
    </CartProductContainer>
  );
};

export default CardCartProduct;
