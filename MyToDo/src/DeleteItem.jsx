import React from 'react';

const DeleteItem = ({ index, onDelete }) => {
  return (
    <button onClick={() => onDelete(index)}>Borrar</button>
  );
};

export default DeleteItem;