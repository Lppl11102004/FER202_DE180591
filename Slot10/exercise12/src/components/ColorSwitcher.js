import React, { useState } from 'react';

const ColorSwitcher = () => {
  const [color, setColor] = useState('white');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h2>Color Switcher</h2>
      <select onChange={handleColorChange} value={color}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: color,
          marginTop: '10px',
          border: '1px solid black',
        }}
      ></div>
    </div>
  );
};

export default ColorSwitcher;