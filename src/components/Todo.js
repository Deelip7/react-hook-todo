import React from 'react';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} className='todo'>
      <button onClick={() => completeTodo(index)}>
        <span role='img' aria-label='click as completed'>
          ⭕
        </span>
      </button>
      {`${todo.text}`}

      <button style={{ float: 'right' }} onClick={() => removeTodo(index)}>
        <span role='img' aria-label='delete todo'>
          ❌
        </span>
      </button>
    </div>
  );
}

export default Todo;
