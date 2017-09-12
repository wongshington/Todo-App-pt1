import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos } from './actions/todo_actions';
import { receiveTodo } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';
// import App from './components/app';
import Root from './components/root';
//

const store = configureStore();
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos;

document.addEventListener("DOMContentLoaded", function(){
  // ReactDOM.render(<h1>Todos App</h1>, document.getElementById('root'));
  ReactDOM.render(<Root store={ store } />, document.getElementById('root'));
});
