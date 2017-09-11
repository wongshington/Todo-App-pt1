import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos } from './actions/todo_actions';
import { receiveTodo } from './actions/todo_actions';

const store = configureStore();
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<h1>Todos App</h1>, document.getElementById('root'));
});
