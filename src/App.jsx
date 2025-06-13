import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css'; // For basic styling

function App() {
  const [todos, setTodos] = useState([]); // Array of todo objects: { id, text, completed }

  // Optional: Load todos from local storage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Optional: Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(), // Simple unique ID
      text: todoText,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodoComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={toggleTodoComplete}
        onDeleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;