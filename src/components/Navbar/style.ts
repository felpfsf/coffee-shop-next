import { styled } from "../../styles";

export const NavbarContainer = styled("header", {
  maxWidth: "1440px",
  width: "100%",
  margin: "0 auto",
  padding: "2rem 1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (min-width:1024px)": {
    padding: "2rem 10rem",
  },
});

export const ShoppingCartButton = styled("button", {
  position: "relative",
  color: "$yellow-dark",
  lineHeight: 0,
  border: "none",
  borderRadius: "6px",
  background: "$yellow-light",
  padding: "0.5rem",
  cursor: "pointer",
});

export const CartItemsCount = styled("span", {
  position: "absolute",
  top: -8,
  right: -8,
  width: "20px",
  height: "20px",
  fontSize: "$xs",
  color: "$white",
  fontWeight: "bold",
  background: "$yellow-dark",
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
