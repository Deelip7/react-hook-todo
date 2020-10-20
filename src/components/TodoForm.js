import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='submit' className='input' placeholder='Press Enter to Add Todo...' value={value} onChange={(e) => setValue(e.target.value)} />
      <button style={{ float: 'right' }} onChange={(e) => setValue(e.target.value)}>
        <span role='img' aria-label='add todo' style={{ fontSize: '30px', marginTop: '221px' }}>
          ✅
        </span>
      </button>
    </form>
  );
}

export default TodoForm;
