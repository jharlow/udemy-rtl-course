import { useState } from "react";
import "./App.css";

export const replacePascalCaseWithSpaces = (colorName) =>
  colorName.replace(/\B([A-Z])\B/g, " $1");

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const newColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const buttonText = `Change to ${replacePascalCaseWithSpaces(newColor)}`;
  const buttonColor = disabled ? "gray" : color;
  const handleColor = () => {
    setColor(newColor);
  };
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={handleColor}
        disabled={disabled}
      >
        {buttonText}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
