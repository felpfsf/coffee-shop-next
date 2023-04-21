import Image from "next/image";
import { formatCurrency } from "../../utils/formatCurrency";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  ActionsContainer,
  CardWrapper,
  CartProductContainer,
  ShoppingCartButton,
} from "./styles";

interface ProductProps {
  name: string;
  imageUrl: string;
  quantity: number;
  price: number;
}

const CardCartProduct = ({ imageUrl, name, price, quantity }: ProductProps) => {
  return (
    <CartProductContainer>
      <CardWrapper>
        <Image
          src={imageUrl}
          alt={`Imagem de ${name}`}
          width={64}
          height={64}
        />
        <div>
          <h2>{name}</h2>
          <ActionsContainer>
            <div>
              <button>
                <Minus />
              </button>
              <span>{quantity}</span>
              <button>
                <Plus />
              </button>
            </div>
            <ShoppingCartButton>
              <Trash />
              Remover
            </ShoppingCartButton>
          </ActionsContainer>
        </div>
      </CardWrapper>
      <strong>{formatCurrency.format(price)}</strong>
    </CartProductContainer>
  );
};

export default CardCartProduct;
