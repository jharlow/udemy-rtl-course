import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newColor = color === "red" ? "blue" : "red";
  const handleColor = () => {
    setColor(newColor);
  };
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={handleColor}
        disabled={disabled}
      >
        Change to {newColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
