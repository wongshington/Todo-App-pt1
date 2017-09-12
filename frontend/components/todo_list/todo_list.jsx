import React from 'react';
// import TodoListItem from './todo_list/todo_list_item';

const TodoList = ({ todos }) => {
  return (
    <div id="list">
      <ul>
        {
          todos.map(todo => (<li>{ todo.title }</li>))
        }
      </ul>
    </div>
  );

};



export default TodoList;
