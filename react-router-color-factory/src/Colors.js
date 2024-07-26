import React from "react";
import { Link } from "react-router-dom";

function Colors({ colors }) {
  return (
    <div>
      <h1>Welcome to the Color Factory!</h1>
      <ul className="color-list">
        {colors.map((color) => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Colors;