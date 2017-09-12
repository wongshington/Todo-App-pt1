import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {

  constructor({todos}){
    super({todos});
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
    </div>
  );
}

}



export default TodoList;
