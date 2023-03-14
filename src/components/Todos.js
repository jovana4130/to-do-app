import { useEffect, useState } from 'react';
import './Todos.css';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isAllCompleted, completedTodos] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const onChangeIsComplete = (id) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      };
      return item;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);

  useEffect(() => {
    const completedTodos = todos.filter((item) => item.completed).length;
    if (!completedTodos || !todos.length) return setPercentage(0);
    const percentage = (completedTodos / todos.length) * 100;
    setPercentage(percentage);
  }, [todos]);

  return (
    <div className="todos-wrapper">
      <h1>TODOS</h1>
      <h4>Procenat % uradjenih taskova: {percentage.toFixed(0)}%</h4>
      {todos.map((item) => {
        return (
          <div key={item.id} className="todo">
            <input type="checkbox" checked={item.completed} onChange={() => onChangeIsComplete(item.id)}/>
            <span>{item.todo}</span>
          </div>
        );
      })}
      {isAllCompleted && <h3>All items are checked</h3>}
    </div>
  );
};

export default Todos;