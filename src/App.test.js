import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and updates when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions for checkbox and color button", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to/i });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole("checkbox")
  expect(checkbox).not.toBeChecked()
});


test("checkbox disables button on first click and enables on second click", () => {
  render(<App/>)
  const colorButton = screen.getByRole("button", {name: /change to/i })
  const checkbox = screen.getByRole("checkbox")

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})