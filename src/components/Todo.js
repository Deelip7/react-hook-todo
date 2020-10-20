import React, { useState } from 'react';

function Todo({ todo, index, completeTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} className='todo'>
      <button onClick={() => completeTodo(index)}>⭕</button>
      {`  ${todo.text}`}
    </div>
  );
}

export default Todo;
