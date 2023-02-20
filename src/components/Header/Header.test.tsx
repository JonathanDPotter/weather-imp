import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

const TestHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

test("Header should display the site title", () => {
  render(<TestHeader />);

  const title = screen.getByText(/Weather Imp/);

  expect(title).toBeInTheDocument();
});

test("Header includes the primary navigateion", () => {
  render(<TestHeader />);

  const nav = screen.getByRole("navigation");

  expect(nav).toBeInTheDocument();
});

test("primary navigation links to current, hourly and three-day forecast pages", () => {
  render(<TestHeader />);

  const currentLink = screen.getByText(/Current/);
  const hourLink = screen.getByText(/Hourly/);
  const threeDayLink = screen.getByText(/Three Day/);

  expect(currentLink).toBeInTheDocument();
  expect(hourLink).toBeInTheDocument();
  expect(threeDayLink).toBeInTheDocument();

  fireEvent.click(hourLink);

  expect(window.location.pathname).toBe("/hourly");

  fireEvent.click(threeDayLink);

  expect(window.location.pathname).toBe("/threeday");

  fireEvent.click(currentLink);

  expect(window.location.pathname).toBe("/");
});

test("primary navigation links navigate to the correct pages", () => {
  render(<TestHeader />);

  const currentLink = screen.getByText(/Current/);
  const hourLink = screen.getByText(/Hourly/);
  const threeDayLink = screen.getByText(/Three Day/);
  const aboutLink = screen.getByText(/About/);

  fireEvent.click(hourLink);

  expect(window.location.pathname).toBe("/hourly");

  fireEvent.click(threeDayLink);

  expect(window.location.pathname).toBe("/threeday");

  fireEvent.click(currentLink);

  expect(window.location.pathname).toBe("/");

  fireEvent.click(aboutLink);

  expect(window.location.pathname).toBe("/about");
});
