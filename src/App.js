import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

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

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = newTodos[index].isCompleted === false ? true : false;
    console.log(newTodos[index]);
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <h1>
        Todo List{' '}
        <span role='img' aria-label='Logo'>
          🔰
        </span>
      </h1>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
