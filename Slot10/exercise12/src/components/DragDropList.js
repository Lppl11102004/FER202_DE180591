import React, { useState } from 'react';

const DragDropList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggingItem === null || draggingItem === index) return;

    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDraggingItem(index);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div>
      <h2>Drag and Drop List</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            style={{
              padding: '10px',
              margin: '5px',
              backgroundColor: draggingItem === index ? '#ddd' : '#f9f9f9',
              cursor: 'move',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragDropList;