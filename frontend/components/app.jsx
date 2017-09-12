import React from 'react';
import TodoList from './todo_list/todo_list';
import TodoListContainer from './todo_list/todo_list_container';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1 id='App'>This is App.jsx, you found it!</h1>
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
