import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue(''); // Clear input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;