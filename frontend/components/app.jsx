import React from 'react';
import TodoList from './todo_list/todo_list';

class App extends React.Component {

  constructor(props){
    super();
  }

  render() {
    return (
      <div>
        <h1 id='App'>This is App.jsx, you found it!</h1>
        <h2 id='list'>TodoList</h2>
      </div>
    );
  }
}

export default App;
