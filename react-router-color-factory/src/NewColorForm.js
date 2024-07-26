import React from "react";
import { useHistory } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [colorName, setColorName] = React.useState("");
  const [colorValue, setColorValue] = React.useState("#000000");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(colorName);
    history.push("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="colorName">Color Name</label>
      <input
        type="text"
        id="colorName"
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
        required
      />
      <label htmlFor="colorValue">Color Value</label>
      <input
        type="color"
        id="colorValue"
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
        required
      />
      <button type="submit">Add Color</button>
    </form>
  );
}

export default NewColorForm;