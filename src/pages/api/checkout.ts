import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

interface ItemsProps {
  product: {
    defaultPriceId: string;
  };
  quantity: number;
}

interface LineItemsProps {
  price: string;
  quantity: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body.cartItems);

  const items: ItemsProps[] = req.body.cartItems;
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  let lineItems: LineItemsProps[] = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.product.defaultPriceId,
      quantity: item.quantity,
    });
  });
  console.log(lineItems);

  const session = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: lineItems,
    mode: "payment",
  });

  return res.status(201).json({
    checkoutUrl: session.url,
  });
}
