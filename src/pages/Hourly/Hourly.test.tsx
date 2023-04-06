import { render, screen } from "@testing-library/react";
import Hourly from "./Hourly";

test("Hourly page displays the title 'Current'", () => {
  render(<Hourly />);

  const title = screen.getByRole("heading");

  expect(title.textContent).toMatch(/Hourly/);
});
