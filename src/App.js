import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      isCompleted: false,
    },
    {
      text: 'Javascript is awesome',
      isCompleted: false,
    },
    {
      text: 'Build Todo list',
      isCompleted: false,
    },
  ]);
  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => {
          // <Todo key={index} index={index} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default App;
