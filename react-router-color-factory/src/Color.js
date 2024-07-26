import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";

function Color({ colors }) {
  const { color } = useParams();
  const colorExists = colors.includes(color);

  if (!colorExists) {
    return <Redirect to="/colors" />;
  }

  return (
    <div>
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <h1>This is {color}</h1>
      <Link to="/colors">Go back</Link>
    </div>
  );
}

export default Color;