import { styled } from "../../styles";

export const CardContainer = styled("div", {
  width: "16rem",
  height: "19.375rem",
  backgroundColor: "$base-card",
  borderRadius: "0.375rem 2.25rem",
  padding: "0 1.25rem 1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  img: {
    marginTop: "-20px",
  },
});

export const BadgeContainer = styled("div", {
  width: "100%",
  marginTop: "1rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "0.25rem",
});

export const Badge = styled("span", {
  fontSize: "$2xs",
  fontWeight: "bold",
  color: "$yellow-dark",
  textTransform: "uppercase",
  padding: "0.25rem 0.5rem",
  backgroundColor: "$yellow-light",
  borderRadius: "6.25rem",
});

export const DetailContainer = styled("div", {
  textAlign: "center",
  lineHeight: "130%",
  marginTop: "1.25rem",
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  h1: {
    fontSize: "$lg !important",
    fontFamily: "$font-header",
    color: "$base-subtitle",
  },
  p: {
    fontSize: "$sm",
    color: "$base-label",
  },
});

export const BuyContainer = styled("div", {
  marginTop: "2rem",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "1.875rem",
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
  color: "$white",
  lineHeight: 0,
  padding: "0.5rem",
  border: "none",
  borderRadius: "0.375rem",
  background: "$purple-dark",
  cursor: "pointer",
  "&:hover": {
    background: "$purple",
    transition: "all .3s ease-in-out",
  },
});
