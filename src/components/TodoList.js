import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          {todo.completed ? (
  <span data-testid={`todo-${todo.id}`}>Completed</span>
) : (
  <button onClick={() => handleComplete(todo.id)} data-testid={`button-${todo.id}`}>
    Complete
  </button>
)}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
