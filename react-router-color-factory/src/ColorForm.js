import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ColorForm({ addColor }) {
    const [color, setColor] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);
        history.push('/colors');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Color:
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            </label>
            <button type="submit">Add Color</button>
        </form>
    );
}

export default ColorForm;