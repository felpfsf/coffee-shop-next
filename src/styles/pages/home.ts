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
    fontSize: "$2xl",
    fontWeight: "bold",
    color: "$base-title",
    fontFamily: "$font-header",
    "@media (min-width:768px)": {
      fontSize: "$3xl",
    },
  },
  h2: {
    fontSize: "$md",
    fontWeight: "400",
    color: "$base-subtitle",
    marginTop: "1rem",
    "@media (min-width:768px)": {
      fontSize: "$lg",
    },
  },
});

export const ItemsGroup = styled("div", {
  marginTop: "3rem",
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  rowGap: "1.25rem",
  "@media (min-width:768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width:1024px)": {
    marginTop: "4rem",
  },
});

export const Item = styled("div", {
  fontSize: "$sm",
  display: "flex",
  alignItems: "center",
  lineHeight: 1,
  gap: "0.75rem",
  "@media (min-width:768px)": {
    fontSize: "$base",
  },
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