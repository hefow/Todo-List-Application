// TodoFilter.js
import React, { useContext, useCallback } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoFilter() {
  const { state, dispatch } = useContext(TodoContext);
  const { filter } = state;

  const setFilter = useCallback((filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  }, [dispatch]);

  return (
    <div className="flex justify-center mb-4">
      <button
        className={`px-4 py-2 mx-1 rounded-lg ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 mx-1 rounded-lg ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={`px-4 py-2 mx-1 rounded-lg ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}
