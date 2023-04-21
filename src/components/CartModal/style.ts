import { keyframes, styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

const overlayShown = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": {
    transform: "translate(100%, -50%)",
  },
  "100%": {
    transform: "translate(-50%, -50%)",
  },
});

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgb(0 0 0 /.25)",
  animation: `${overlayShown} .2s ease-in-out`,
});

export const Content = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  maxWidth: "28rem",
  width: "90vw",
  backgroundColor: "$base-card",
  padding: "2rem 1rem",
  animation: `${contentShow} .2 ease-in-out`,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "&:focus": {
    outline: "none",
  },
});

export const CloseButton = styled("button", {
  position: "absolute",
  top: "16px",
  right: "16px",
  color: "$yellow",
  "&:hover": {
    color: "$yellow-dark",
    transition: "color .2s ease-in-out",
  },
});

export const CartItemsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  "& > *:not(:last-child)": {
    borderBottom: "1px solid $base-button",
    paddingBottom: "24px",
  },
});

export const OrderSummary = styled("div", {
  marginTop: "24px",
  borderTop: "1px solid $base-button",
  padding: "24px 8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  h1: {
    fontSize: "$lg",
  },
  strong: {
    fontSize: "$lg",
  },
});

export const SubmitOrderButton = styled("button", {
  fontSize: "$sm",
  color: "$white",
  letterSpacing: "1px",
  fontWeight: "bold",
  lineHeight: 1.6,
  textTransform: "uppercase",
  width: "100%",
  background: "$yellow",
  borderRadius: "6px",
  padding: "12px 8px",
  cursor: "pointer",
  "&:hover": {
    background: "$yellow-dark",
    transition: "all .2s ease-in-out",
  },
});
