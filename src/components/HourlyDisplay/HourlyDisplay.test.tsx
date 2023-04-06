import { render, screen } from "@testing-library/react";
import forecastDay from "../../testObjects/testForecastDay";
import HourlyDisplay from "./HourlyDisplay";

test("Displays forecast date as card title", () => {
  forecastDay.hour[0].time = Date.now().toString();

  const now = new Date(forecastDay.hour[0].time).toLocaleDateString("en-US", {
    hour: "numeric",
    month: "short",
    weekday: "short",
    day: "numeric",
  });

  render(<HourlyDisplay weather={forecastDay.hour[0]} />);

  const title = screen.getByRole("heading");

  expect(title.innerHTML).toBe(now);
});

test("Displays the condition text", () => {
  forecastDay.hour[0].condition.text = "Sunny";

  render(<HourlyDisplay weather={forecastDay.hour[0]} />);

  const condition = screen.getByText(/Sunny/);

  expect(condition).toBeInTheDocument();
});


