import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleComplete, onDeleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // Important for React list rendering
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;