import { FC } from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import LocationBar from "./LocationBar";
import LocationProvider from "../../context/Location.context";

const TestLocationBar: FC = () => {
  return (
    <LocationProvider>
      <LocationBar />
    </LocationProvider>
  );
};

test("LocationBar shows 'Getting Location'", () => {
  render(<LocationBar />);

  const location = screen.getByTestId("location");

  expect(location.textContent).toMatch(/Getting Location.../);
});

test("LocationBar shows use zipcode button and it opens modal", async () => {
  render(<LocationBar />);

  const useZip = screen.getByRole("button");

  expect(useZip.textContent).toMatch(/Get City by Zip Code/);

  fireEvent.click(useZip);

  const input = screen.getByTestId("zip-input");
  const go = screen.getByTestId("go");

  expect(input).toBeInTheDocument();
  expect(go).toBeInTheDocument();
});
