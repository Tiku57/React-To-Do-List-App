import React from 'react';

function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleComplete(todo.id)} className="todo-text">
        {todo.text}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;