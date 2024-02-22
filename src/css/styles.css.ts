import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
  padding: "1.25rem",
  backgroundColor: "#E6FFFA",
  minHeight: "100vh",
  color: "#4A5568",
});

export const title = style({
  fontSize: "1.5rem",
  margin: "1.25rem 0",
});

export const buttonStyle = style({
  padding: "2px 6px",
  fontSize: "0.75rem",
  border: "none",
  borderRadius: "0.25rem",
  backgroundColor: "#319795",
  color: "white",
  cursor: "pointer",
});
