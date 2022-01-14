import React from "react";
import { render, screen } from "@testing-library/react";
import App2 from "./App2.jsx";

test("Header contains correct text", () => {
  render(<App2 />);
  const text = screen.getByText("My React and TypeScript App!2");
  expect(text).toBeInTheDocument();
});
