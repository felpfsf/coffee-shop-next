import { styled } from "../../styles";

export const CartProductContainer = styled("div", {
  backgroundColor: "$base-card",
  padding: "8px",
  display: "flex",
  justifyContent: "space-between",
});

export const CardWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  h2: {
    marginBottom: "8px",
  },
});

export const ActionsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
  div: {
    height: "2rem",
    padding: "0.25rem",
    background: "$base-button",
    borderRadius: "0.375rem",
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    button: {
      color: "$purple",
      height: "100%",
      borderRadius: "100%",
    },
    "button:hover": {
      color: "$purple-dark",
      background: "$base-hover",
      transition: "all .3s ease-in-out",
    },
  },
});

export const ShoppingCartButton = styled("button", {
  position: "relative",
  lineHeight: 0,
  padding: "0.5rem",
  border: "none",
  borderRadius: "0.375rem",
  background: "$base-button",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  cursor: "pointer",
  svg: {
    color: "$purple",
  },
  "&:hover": {
    color: "$white",
    background: "$purple-dark",
    transition: "all .3s ease-in-out",
    svg: {
      color: "$white",
      transition: "all .3s ease-in-out",
    },
  },
});
