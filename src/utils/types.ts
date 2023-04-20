export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  meta: { [key: string]: string }[];
}
