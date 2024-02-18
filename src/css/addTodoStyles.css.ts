import { style } from "@vanilla-extract/css";

export const addTodo = style({
  display: "flex",
  justifyContent: "center",
  color: "#4A5568",
});

export const inputBar = style({
  height: "20px",
  fontSize: "16px",
  marginRight: "3px",
});

export const addButtonStyle = style({
  height: "25px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#319795",
  color: "white",
  cursor: "pointer",
});
