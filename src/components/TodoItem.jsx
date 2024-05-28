
import React, { useCallback, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  const toggleTodo = useCallback(() => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  }, [dispatch, todo.id]);

  const removeTodo = useCallback(() => {
    dispatch({ type: 'REMOVE_TODO', payload: todo.id });
  }, [dispatch, todo.id]);

  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-300">
      <div className="flex items-center">
        <input type="checkbox" checked={todo.completed} onChange={toggleTodo} className="mr-2" />
        <span className={`${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
      </div>
      <button onClick={removeTodo} className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700">
        Remove
      </button>
    </li>
  );
}
