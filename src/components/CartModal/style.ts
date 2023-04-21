import { ButtonHTMLAttributes, ComponentType } from "react";
import { keyframes, styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

const spin = keyframes({
  to: {
    transform: "translate(-50%,-50%) rotate(360deg)",
  },
});

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
  width: "100%",
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

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean;
};

type ButtonType = ComponentType<ButtonProps>;

export const SubmitOrderButton = styled("button", {
  position: "relative",
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
  "&:not(:disabled):hover": {
    background: "$yellow-dark",
    transition: "all .2s ease-in-out",
  },
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  "&::before": {
    position: "absolute",
    content: "",
    width: "1.25rem",
    height: "1.25rem",
    top: "50%",
    left: "30%",
    transform: "translate(-50%, -50%)",
    border: "2px solid $white",
    borderTop: "transparent",
    borderRadius: "100%",
    animation: `${spin} .8s linear infinite`,
    pointerEvents: "none",
  },
  variants: {
    isLoading: {
      true: {
        "&:before": {
          opacity: 1,
        },
      },
      false: {
        "&:before": {
          opacity: 0,
        },
      },
    },
  },
  defaultVariants: {
    isLoading: false,
  },
})<{}, ButtonType>;

export const NoProductsContainer = styled("div", {
  padding: "8px",
  marginTop: "2rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  img: {
    width: "100%",
    height: "100%",
    aspectRatio: "1",
    border: "2px solid $base-button",
    borderRadius: "100%",
    padding: "2rem",
    opacity: 0.5,
  },

  h2: {
    fontFamily: "$font-header",
    fontSize: "$2xl",
    textAlign: "center",
  },
});
