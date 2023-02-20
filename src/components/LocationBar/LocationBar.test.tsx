import react, { FC } from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
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

  const input = screen.getByLabelText("Enter 5 digit US zip code");
  const go = screen.getByText("Go!");

  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "10001" } });

  fireEvent.click(go);

  console.log(useZip.textContent);

  expect(input).not.toBeInTheDocument();
});
