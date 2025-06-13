import React from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragDropList from './components/DragDropList';
import './App.css'; // Optional for styling

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React useState Exercises</h1>
      <hr />
      <Counter />
      <hr />
      <ControlledInput />
      <hr />
      <ToggleVisibility />
      <hr />
      <TodoList />
      <hr />
      <ColorSwitcher />
      <hr />
      <SearchFilter />
      <hr />
      <DragDropList />
    </div>
  );
};

export default App;