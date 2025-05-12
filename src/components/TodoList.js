import React from 'react';

const TodoList = ({ todos, handleclick }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} -{' '}
            {todo.completed ? (
              <span data-testid={`todo-completed-${todo.id}`}>Completed</span>
            ) : (
              <button
                data-testid={`todo-button-${todo.id}`}
                onClick={() => handleclick(todo.id)}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
