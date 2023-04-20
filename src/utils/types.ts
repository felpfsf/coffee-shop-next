export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: string;
  meta: { [key: string]: string }[];
}
