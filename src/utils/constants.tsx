import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

interface ItemProps {
  id: number;
  variant: "cart" | "package" | "delivery" | "coffee";
  icon: JSX.Element;
  text: string;
}

export const Items: ItemProps[] = [
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
