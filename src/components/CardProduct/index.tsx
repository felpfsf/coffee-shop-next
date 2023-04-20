import { useState } from "react";
import Image from "next/image";
import { Product } from "../../utils/types";
import { useCart } from "../../context/CartContext";
import {
  ActionsContainer,
  Badge,
  BadgeContainer,
  BuyContainer,
  CardContainer,
  DetailContainer,
  ShoppingCartButton,
} from "./style";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

const CardProduct = (product: Product) => {
  const { addToCart } = useCart();
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart(count);
    }
  };
  return (
    <CardContainer>
      <Image src={product.imageUrl} alt={""} width={120} height={120} />
      <BadgeContainer>
        {product.meta &&
          Object.entries(product.meta).map(([key, value]) => (
            <Badge key={key}>{String(value)}</Badge>
          ))}
      </BadgeContainer>
      <DetailContainer>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </DetailContainer>
      <BuyContainer>
        <strong>{product.price}</strong>
        <ActionsContainer>
          <div>
            <button onClick={decrement}>
              <Minus />
            </button>
            <span>{count}</span>
            <button onClick={increment}>
              <Plus />
            </button>
          </div>
          <ShoppingCartButton onClick={handleAddToCart}>
            <ShoppingCart weight='fill' />
          </ShoppingCartButton>
        </ActionsContainer>
      </BuyContainer>
    </CardContainer>
  );
};

export default CardProduct;
