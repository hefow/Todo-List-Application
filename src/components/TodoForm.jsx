// TodoForm.js
import React, { useRef, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoForm() {
  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: inputRef.current.value,
      completed: false,
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    inputRef.current.value = '';
  };

  return (
    <form className="flex justify-center items-center mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        className="p-2 border border-gray-300 rounded-lg w-72 mr-2"
        placeholder="Add a new todo"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Add Todo
      </button>
    </form>
  );
}
