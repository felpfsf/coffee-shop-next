import { styled } from "..";

export const SuccessContainer = styled("main", {
  maxWidth: "90rem",
  width: "100%",
  margin: "0 auto",
  padding: "0 1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "@media (min-width:1024px)": {
    padding: "0 10rem",
  },
  "@media (min-width:1366px)": {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "5rem",
  },
});

export const DeliveryInfoContainer = styled("div", {
  position: "relative",
  marginTop: "1rem",
  borderRadius: ".375rem 2.25rem",
  background: "$background",
  padding: "2.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "&::before": {
    content: "",
    position: "absolute",
    inset: -1,
    zIndex: -1,
    borderRadius: ".375rem 2.25rem",
    background: "linear-gradient(to right, $yellow, $purple)",
    pointerEvents: "none",
  },
});

export const Container = styled("div", {
  marginTop: "1rem",
  padding: "8px",
  backgroundColor: "$base-card",
  borderRadius: ".375rem",
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
});

export const ProductInfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  h2: {
    fontSize: "$md",
    fontWeight: "600",
  },
});
