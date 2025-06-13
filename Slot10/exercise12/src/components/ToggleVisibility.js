import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>Toggle Visibility</h2>
      <button onClick={toggleText}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <p>This is the toggled text!</p>}
    </div>
  );
};

export default ToggleVisibility;