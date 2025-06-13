# 📝 React To-Do List App

A simple and intuitive To-Do List application built entirely with React. This project demonstrates fundamental React concepts such as state management, props, component composition, and event handling.

---

## ✨ Features

- **Add To-Dos**: Quickly add new tasks to your list.
- **Toggle Completion**: Mark tasks as complete or incomplete with a single click.
- **Delete To-Dos**: Remove tasks you no longer need.
- **Persistence**: Your to-dos are saved in local storage, so they're still there even if you close and reopen the browser!

---

## 🚀 Technologies Used

- **React**: A JavaScript library for building user interfaces.

---

## 🛠️ Installation & Setup

Follow these steps to get the project up and running on your local machine.

1. **Clone the repository** (if applicable):

1. **Clone the repository**:

```bash
git clone https://github.com/Tiku57/React-To-Do-List-App
cd React-To-Do-List-App
```

2. **Navigate to the project directory** (if you've created it manually):

```bash
cd my-todo-app # Or whatever you named your project folder
```

3. **Install dependencies**:

```bash
npm install
# or
yarn install
```

4. **Start the development server**:

```bash
npm start
# or
yarn start

# If you're using Vite:
# npm run dev
# or
# yarn dev
```

This will open the app in your browser, usually at `http://localhost:3000` (or `http://localhost:5173` if using Vite).

---

## 📁 Project Structure

```
my-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── App.css           # Basic styling for the application
│   ├── App.jsx           # Main application component, handles state
│   ├── index.css         # Global styles (if any)
│   ├── index.js          # React entry point
│   └── components/
│       ├── TodoForm.jsx  # Component for adding new to-dos
│       ├── TodoItem.jsx  # Component for displaying a single to-do
│       └── TodoList.jsx  # Component for rendering the list of to-dos
├── package.json
└── README.md
```

---

## 💡 How It Works

- **App.jsx**: This is the brain of the application. It manages the `todos` array state, along with functions to `addTodo`, `toggleTodoComplete`, and `deleteTodo`. It also handles saving and loading to-dos from local storage using `useEffect`.

- **TodoForm.jsx**: A controlled component that takes user input and calls the `onAddTodo` prop to add new items to the list.

- **TodoList.jsx**: Receives the `todos` array as a prop and maps over it, rendering a `TodoItem` for each todo.

- **TodoItem.jsx**: Displays an individual to-do's text and provides buttons/handlers to toggle its completion status and delete it, using props passed down from `App.jsx`.

---
