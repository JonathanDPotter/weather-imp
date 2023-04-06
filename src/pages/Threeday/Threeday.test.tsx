import { render, screen } from "@testing-library/react";
import Threeday from "./Threeday";

test("Threeday page displays the title 'Current'", () => {
  render(<Threeday />);

  const title = screen.getByRole("heading");

  expect(title.textContent).toMatch(/Three Day Forecast/);
});
