import { styled } from "@stitches/react";

export const ProductsContainer = styled("section", {
  maxWidth: "90rem",
  width: "100%",
  margin: "2rem auto",
  padding: "0 1rem",
  "@media (min-width:1024px)": {
    padding: "0 10rem",
  },
  h1: {
    fontSize: "$2xl",
    fontWeight: "bold",
    fontFamily: "$font-header",
    color: "$base-subtitle",
  },
});

export const ProductsGrid = styled("div", {
  marginTop: "3rem",
  display: "grid",
  gridTemplateColumns: "1fr",
  placeItems: "center",
  rowGap: "2.5rem",
  "@media (min-width:768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    rowGap: "2.5rem",
    placeItems: "center",
  },
  "@media (min-width:1366px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: "2.5rem",
    placeItems: "center",
  },
  "@media (min-width:1440px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
    rowGap: "2.5rem",
  },
});
