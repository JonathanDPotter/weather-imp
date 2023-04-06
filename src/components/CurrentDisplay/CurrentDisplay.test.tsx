import { render, screen } from "@testing-library/react";
import weather from "../../testObjects/testWeatherObject";
import CurrentDisplay from "./CurrentDisplay";

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

test("Displays today's date as the card title", () => {
  render(<CurrentDisplay {...{ weather }} />);

  const title = screen.getByRole("heading");

  expect(title.innerHTML).toEqual(today);
});

test("Displays the temperature as a whole number with the degree symbol", () => {
  weather.current.temp_f = 54.5;

  render(<CurrentDisplay {...{ weather }} />);

  const temp = screen.getByTestId("temp");

  expect(temp.innerHTML).toMatch(/55°/);
});
