import React from 'react';

function Todo({ todo, index, completeTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} className='todo'>
      <button onClick={() => completeTodo(index)}>
        <span role='img' aria-label='click as completed'>
          ⭕
        </span>
      </button>
      {`  ${todo.text}`}
    </div>
  );
}

export default Todo;
