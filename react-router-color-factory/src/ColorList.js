import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({ colors }) {
    return (
        <div>
            <h1>Color List</h1>
            <ul>
                {colors.map(color => (
                    <li key={color}>
                        <Link to={`/colors/${color}`}>{color}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/colors/new">Add a new color</Link>
        </div>
    );
}

export default ColorList;