import React from 'react'
import TodoForm from './components/TodoForm'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoContext';


function App() {
  return (
    <TodoProvider>
      <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <TodoForm/>
      <TodoFilter/>
      <TodoList/>
    </div>
    </TodoProvider>
    
  )
}

export default App
