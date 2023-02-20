import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";

test("Home page displays the title 'Current'", () => {
  render(<Home />);

  const title = screen.getByRole("heading");

  expect(title.textContent).toMatch(/Current/);
})