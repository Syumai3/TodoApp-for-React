import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  boxSizing: "border-box",
  fontSize: "16px",
});

globalStyle("*", {
  boxSizing: "inherit",
  margin: 0,
  padding: 0,
});
