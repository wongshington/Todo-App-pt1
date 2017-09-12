import React from 'react';

class TodoListItem extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.todo.title}
        </li>
      </div>
    );
  }
}

export default TodoListItem;
