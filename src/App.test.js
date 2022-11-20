import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replacePascalCaseWithSpaces } from "./App";

describe("button and checkbox are styled and act correctly", () => {
  test("button has correct initial color and updates when clicked", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", {
      name: "Change to Midnight Blue",
    });
    expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
    expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
  });

  test("initial conditions for checkbox and color button", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", { name: /change to/i });
    expect(colorButton).toBeEnabled();
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    expect(checkbox).not.toBeChecked();
  });

  test("checkbox disables button on first click and enables on second click", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", { name: /change to/i });
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
  });

  test("button turns gray whenever it is disabled", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", { name: /change to/i });
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
    fireEvent.click(colorButton);
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  });
});

describe("spaces before pascal-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replacePascalCaseWithSpaces("Red")).toBe("Red");
  });
  test("works for one innner capital letter", () => {
    expect(replacePascalCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works fore multiple inner capital letters", () => {
    expect(replacePascalCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
