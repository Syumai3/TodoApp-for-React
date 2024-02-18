import { style } from "@vanilla-extract/css";

export const filterbar = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const filterItem = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontSize: "14px",
  ":hover": {
    cursor: "pointer",
  },
});

export const checkbox = style({
  ":hover": {
    cursor: "pointer",
  },
});
