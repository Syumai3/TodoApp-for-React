import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  padding: "20px",
  backgroundColor: "#E6FFFA",
  minHeight: "100vh",
  color: "#4A5568",
});

export const title = style({
  fontSize: "24px",
  margin: "20px 0",
});

export const buttonStyle = style({
  height: "20px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#319795",
  color: "white",
  cursor: "pointer",
});
