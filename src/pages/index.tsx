import Image from "next/image";
import { Items } from "../utils/constants";
import {
  Content,
  HeroContainer,
  HeroWrapper,
  Item,
  ItemsGroup,
} from "../styles/pages/home";
import heroIMG from "../assets/hero_image.png";
import Products from "@/components/Products";

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
                  <span>{item.icon}</span>
                  <p>{item.text}</p>
                </Item>
              ))}
            </ItemsGroup>
          </Content>
          <Image src={heroIMG} alt='' />
        </HeroWrapper>
      </HeroContainer>
      <Products />
    </main>
  );
}
