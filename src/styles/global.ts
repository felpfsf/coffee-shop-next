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
  "button,  input,  optgroup,  select,  textarea": {
    fontFamily: "inherit" /* 1 */,
    fontSize: "100%" /* 1 */,
    lineHeight: 0 /* 1 */,
    margin: 0 /* 2 */,
    border: 0,
  },
  button: {
    cursor: "pointer",
    backgroundColor: "transparent",
  },
  body: {
    color: "$base-text",
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "$font-text",
    background: "$background",
  },
  "body, input, button": {
    fontFamily: "$font-text",
    fontWeight: "400",
  },
});
