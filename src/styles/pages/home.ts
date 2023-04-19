import { styled } from "..";

export const HeroContainer = styled("section", {
  position: "relative",
  margin: "0 auto",
  width: "100%",
  paddingBlock: "24px",
  "&::before": {
    content: "",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    background: "url('hero_background.png') no-repeat center",
    backgroundSize: "cover",
    filter: "blur(80px)",
  },
});

export const HeroWrapper = styled("div", {
  maxWidth: "90rem",
  width: "100%",
  margin: "0 auto",
  padding: "0 1rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "3.5rem",
  img: {
    minWidth: "320px",
    maxWidth: "476px",
    width: "100%",
    height: "auto",
  },
  "@media (min-width:1366px)": {
    padding: "0 10rem",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export const Content = styled("div", {
  maxWidth: "588px",
  width: "100%",
  lineHeight: 1.3,
  h1: {
    fontSize: "$3xl",
    fontWeight: "bold",
    color: "$base-title",
    fontFamily: "$font-header",
  },
  h2: {
    fontSize: "$lg",
    fontWeight: "400",
    color: "$base-subtitle",
    marginTop: "1rem",
  },
});

export const ItemsGroup = styled("div", {
  marginTop: "3rem",
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  rowGap: "1.25rem",
  "@media (min-width:1024px)": {
    marginTop: "4rem",
    gridTemplateColumns: "repeat(2, 1fr)",
    rowGap: "1.25rem",
  },
});

export const Item = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  span: {
    padding: ".5rem",
    borderRadius: "100%",
    display: "flex",
    svg: {
      color: "$white",
    },
  },

  variants: {
    shape: {
      cart: {
        span: {
          backgroundColor: "$yellow-dark",
        },
      },
      delivery: {
        span: {
          backgroundColor: "$yellow",
        },
      },
      package: {
        span: {
          backgroundColor: "$base-text",
        },
      },
      coffee: {
        span: {
          backgroundColor: "$purple",
        },
      },
    },
  },
});
