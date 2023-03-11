import { useEffect, useState } from 'react';
import './Todos.css';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);

  return (
    <div className="todos-wrapper">
      <h1>Todos</h1>
      {todos.map((item) => {
        return (
          <div key={item.id} className="todo">
            <input type="checkbox" checked={item.completed} />
            <span>{item.todo}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;