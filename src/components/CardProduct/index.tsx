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

const CardProduct = () => {
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
            <button>
              <Minus />
            </button>
            <span>1</span>
            <button>
              <Plus />
            </button>
          </div>
          <ShoppingCartButton>
            <ShoppingCart weight='fill' />
          </ShoppingCartButton>
        </ActionsContainer>
      </BuyContainer>
    </CardContainer>
  );
};

export default CardProduct;
