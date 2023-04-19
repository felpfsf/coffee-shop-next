import React from "react";
import { ProductsContainer, ProductsGrid } from "./style";
import CardProduct from "../CardProduct";

const Products = () => {
  return (
    <ProductsContainer>
      <h1>Nossos produtos</h1>
      <ProductsGrid>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </ProductsGrid>
    </ProductsContainer>
  );
};

export default Products;
