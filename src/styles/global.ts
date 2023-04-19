import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  body:{
    color:"$base-text",
    fontFamily:"$ffHeader"
  }
});
