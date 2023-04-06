import { render, screen } from "@testing-library/react";
import forecastDay from "../../testObjects/testForecastDay";
import DayDisplay from "./DayDisplay";

test("Displays forecast date as card title", () => {
  const now = new Date(forecastDay.hour[0].time).toLocaleDateString("en-US", {
    month: "short",
    weekday: "long",
    day: "numeric",
  });

  forecastDay.hour[0].time = now;

  render(<DayDisplay weather={forecastDay} />);

  const title = screen.getByRole("heading");

  expect(title.innerHTML).toBe(now);
});

test("Displays forecast condition", () => {
  forecastDay.day.condition.text = "Sunny";

  render(<DayDisplay weather={forecastDay} />);

  const condition = screen.getByText(/Sunny/);

  expect(condition).toBeInTheDocument();
});

test("Displays High and Low Temps with the degree symbol", () => {
  forecastDay.day.maxtemp_f = 50;
  forecastDay.day.mintemp_f = 40;

  render(<DayDisplay weather={forecastDay} />);

  const maxTemp = screen.getByText(/50°F/);
  const minTemp = screen.getByText(/40°F/);

  expect(maxTemp).toBeInTheDocument();
  expect(minTemp).toBeInTheDocument();
});
