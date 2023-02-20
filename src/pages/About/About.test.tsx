import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import About from "./About"

test("About page displays the 'About' title", () => {
  render(<About />);

  const title = screen.getByRole("heading");

  expect(title.textContent).toMatch(/About/);
})
