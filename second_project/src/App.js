// import './App.css';
import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';

const todos = [
  { text: 'Cortase el cabello', completed: false },
  { text: 'Tomar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];
function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      {/* <h2>Has completado 2 de 3 TODO's</h2> */}
      <TodoSearch />
      <input placeholder="cebolla" />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
