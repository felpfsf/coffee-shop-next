import Stripe from "stripe";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { stripe } from "../lib/stripe";
import { Items } from "../utils/constants";
import { formatCurrency } from "../utils/formatCurrency";
import CardProduct from "@/components/CardProduct";
import heroIMG from "../assets/hero_image.png";
import {
  Content,
  HeroContainer,
  HeroWrapper,
  Item,
  ItemsGroup,
  ProductsContainer,
  ProductsGrid,
} from "../styles/pages/home";
import { Product } from "../utils/types";

interface CatalogProducts {
  products: Product[];
}

export default function Home({ products }: CatalogProducts) {
  return (
    <>
      <Head>
        <title>Coffee Shop Next</title>
      </Head>
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
        <ProductsContainer>
          <h1>Nossos produtos</h1>
          <ProductsGrid>
            {products.map((product) => {
              console.log(product.meta);
              return <CardProduct key={product.id} {...product} />;
            })}
          </ProductsGrid>
        </ProductsContainer>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    const unitAmount = price.unit_amount ?? 0;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      price: formatCurrency.format(unitAmount / 100),
      meta: product.metadata,
    };
  });
  return {
    props: { products },
    revalidate: 60 * 60 * 2, // a cada 2h executa a build
  };
};
