import React, { useState } from 'react';
import AddItem from './AddItem';
import DeleteItem from './DeleteItem';
import MoveItem from './MoveItem';

const TodoList = () => {
  const [items, setItems] = useState([]);

  const handleAdd = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const newItems = [...items];
      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
      setItems(newItems);
    }
  };

  const handleMoveDown = (index) => {
    if (index < items.length - 1) {
      const newItems = [...items];
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
      setItems(newItems);
    }
  };

  return (
    <div>
      <h2>To do list</h2>
      <AddItem onAdd={handleAdd} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <DeleteItem index={index} onDelete={handleDelete} />
            <MoveItem
              index={index}
              onMoveUp={handleMoveUp}
              onMoveDown={handleMoveDown}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;