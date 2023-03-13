import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Todos from './components/Todos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>
);

