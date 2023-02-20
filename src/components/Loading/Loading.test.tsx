import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

test("Loading component shows loading spinner", () => {
  render(<Loading />);
  const spinner = screen.getByRole("status");

  expect(spinner).toBeInTheDocument();
})