import React from 'react';

const MoveItem = ({ index, onMoveUp, onMoveDown }) => {
  return (
    <div>
      <button onClick={() => onMoveUp(index)}>↑</button>
      <button onClick={() => onMoveDown(index)}>↓</button>
    </div>
  );
};

export default MoveItem;