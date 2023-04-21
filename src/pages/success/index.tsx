import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { stripe } from "../../lib/stripe";
import {
  Container,
  DeliveryInfoContainer,
  ProductInfoContainer,
  SuccessContainer,
} from "../../styles/pages/success";
import DeliveryImage from "../../assets/delivery_hero.png";

interface SuccessProps {
  customerName: string;
  customerAddress: {
    city: string;
    country: string;
    line1: string;
    line2: string;
    postal_code: string;
    state: string;
  };
  products: any[];
}

const Success = ({ customerAddress, customerName, products }: SuccessProps) => {
  console.log(products);
  console.log(customerAddress);
  return (
    <>
      <Head>
        <title>Compra efetuada | Coffee Shop Next</title>
        <meta name='robots' content='noindex' />
      </Head>
      <SuccessContainer>
        <DeliveryInfoContainer>
          <h1>Compra efetuada com sucesso !</h1>
          <div>
            <p>
              Entrega em{" "}
              <strong>
                {`${customerAddress.line1}, ${customerAddress.line2} - ${customerAddress.city}`}
              </strong>
            </p>
          </div>
          <div>
            <p>Seus Produtos:</p>
            {products.map((product) => (
              <Container key={product.id}>
                <Image
                  src={product.price.product.images[0]}
                  alt={`imagem de ${product.price.product.name}`}
                  width={64}
                  height={64}
                />
                <ProductInfoContainer>
                  <h2>{product.price.product.name}</h2>
                  <p>Quantidade: {product.quantity}</p>
                </ProductInfoContainer>
              </Container>
            ))}
          </div>
        </DeliveryInfoContainer>
        <Image src={DeliveryImage} alt='' width={492} />
      </SuccessContainer>
    </>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = query.session_id as string;
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });
  const customerName = session.customer_details?.name;
  const customerAddress = session.customer_details?.address;
  const products = session.line_items?.data;
  return {
    props: {
      customerName,
      customerAddress,
      products,
    },
  };
};
