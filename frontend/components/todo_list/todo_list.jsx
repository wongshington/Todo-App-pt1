import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import { receiveTodo } from '../../actions/todo_actions';
// import uniqueId from '../../utils/unique_id';

class TodoList extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
    <div id="list">
      <ul>
        {
          this.props.todos.map(
            (todo, idx) => (<TodoListItem key={idx} todo={todo}/>)
          )
        }
      </ul>
      <TodoForm type={receiveTodo}/>
    </div>
    );
  }
}



export default TodoList;
