import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  ActionsContainer,
  Badge,
  BadgeContainer,
  BuyContainer,
  CardContainer,
  DetailContainer,
  ShoppingCartButton,
} from "./style";
import CoffeeImage from "../../assets/products/expresso.png";
import { useCart } from "../../context/CartContext";

const CardProduct = () => {
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
      <Image src={CoffeeImage} alt={""} width={120} height={120} />
      <BadgeContainer>
        <Badge>tradicional</Badge>
      </BadgeContainer>
      <DetailContainer>
        <h1>Expresso Tradicional</h1>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </DetailContainer>
      <BuyContainer>
        <strong>R$ 9,90</strong>
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
