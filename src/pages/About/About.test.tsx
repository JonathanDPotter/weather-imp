import { fireEvent, render, screen } from "@testing-library/react";
import About from "./About"

test("About page displays the 'About' title", () => {
  render(<About />);

  const title = screen.queryAllByRole("heading");

  expect(title[0].textContent).toMatch(/About Weather Imp/);
  expect(title[1].textContent).toMatch(/Technologies Used/);
})
