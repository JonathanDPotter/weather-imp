import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ZipModal from "./ZipModal";
import { FC, useState } from "react";
import userEvent from "@testing-library/user-event";

const ModalWrapper: FC = () => {
  const [show, setShow] = useState(true);

  const onClose = () => {
    setShow(false);
  };

  return <ZipModal {...{ show, onClose }} />;
};

test("Zipmodal shows modal title", () => {
  render(<ModalWrapper />);

  const title = screen.getByRole("heading");

  expect(title.textContent).toMatch(/Find City by Zip Code/);
});

test("Zipmodal shows close and Go! buttons", () => {
  render(<ModalWrapper />);

  const close = screen.getByText(/Cancel/);
  const go = screen.getByText(/Go!/);

  expect(close).toBeInTheDocument();
  expect(go).toBeInTheDocument();
});

test("ZipModal closes when close button is clicked", async () => {
  render(<ModalWrapper />);

  const close = screen.getByText(/Cancel/);

  fireEvent.click(close);

  await waitFor(() => expect(close).not.toBeInTheDocument());

  expect(close).not.toBeInTheDocument();
});

test("Go! button is disabled until the zip input has a 5 digit number", async () => {
  render(<ModalWrapper />);

  const go = screen.getByText(/Go!/) as HTMLButtonElement;
  const input = screen.getByTestId("zip-input") as HTMLInputElement;

  expect(go.disabled).toBe(true);

  userEvent.type(input, "1000");

  expect(go.disabled).toBe(true);

  userEvent.type(input, "1");

  // input value is now 10001 after both userEvents

  expect(go.disabled).toBe(false);
});

test("Modal closes after Go! button is pressed", async () => {
  render(<ModalWrapper />);

  const go = screen.getByText(/Go!/) as HTMLButtonElement;
  const input = screen.getByTestId("zip-input") as HTMLInputElement;

  userEvent.type(input, "10001");
  userEvent.click(go);

  expect(go).toBeInTheDocument();

  await waitFor(() => expect(go).not.toBeInTheDocument());

  expect(go).not.toBeInTheDocument();
});
