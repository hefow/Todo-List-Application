// TodoList.js
import React, { useContext, useMemo } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { state } = useContext(TodoContext);
  const { todos, filter } = state;

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <ul className="list-none p-0">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
