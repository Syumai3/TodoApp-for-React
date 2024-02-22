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
  fontSize: "0.75rem",
  ":hover": {
    cursor: "pointer",
  },
  gap: "0.5rem",
});

export const checkbox = style({
  ":hover": {
    cursor: "pointer",
  },
});

export const filterCheckboxGroup = style({
  display: "flex",
  alignItems: "center",
});
