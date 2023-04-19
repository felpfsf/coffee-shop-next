import Image from "next/image";
import {
  Content,
  HeroContainer,
  HeroWrapper,
  Item,
  ItemsGroup,
} from "../styles/pages/home";
import heroIMG from "../assets/hero_image.png";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

const Items = [
  {
    id: 1,
    variant: "cart",
    icon: <ShoppingCart weight='fill' />,
    text: "Compra simples e segura",
  },
  {
    id: 2,
    variant: "package",
    icon: <Package weight='fill' />,
    text: "Embalagem mantém o café intacto",
  },
  {
    id: 3,
    variant: "delivery",
    icon: <Timer weight='fill' />,
    text: "Entrega rápida e rastreada",
  },
  {
    id: 4,
    variant: "coffee",
    icon: <Coffee weight='fill' />,
    text: "O café chega fresquinho até você",
  },
];

export default function Home() {
  return (
    <main>
      <HeroContainer>
        <HeroWrapper>
          <Content>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
            <ItemsGroup>
              {Items.map((item) => (
                <Item key={item.id} shape={item.variant}>
                  <span>
                    {item.icon}
                  </span>
                  <p>{item.text}</p>
                </Item>
              ))}
              {/*  */}
            </ItemsGroup>
          </Content>
          <Image src={heroIMG} alt='' />
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
}
