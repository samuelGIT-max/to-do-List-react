import { useState } from 'react'

import Todo from "./components/Todo";

import "./App.css";
import TodoForm from './components/TodoForm';



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir malhar",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  

  const addTodo = (text, category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
  ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
    todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }

  return (
   <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
   </div>
  )
}

export default App