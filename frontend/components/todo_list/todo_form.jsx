import React from 'react';

class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      title: this.title,
      body: this.body
      // done: false
    };
  }

  linkState(key) {
    // here we use '[key]' to set the key to be the value of the 'key' variable,
    // as opposed to a string of 'key'
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  render () {
    return (
      <div>
        <input onChange={this.linkState('title')} value={this.state.title}/>
        <input onChange={this.linkState('body')} value={this.state.body}/>
        <input type="submit" value="Submit"/>
      </div>
    );
  }
}

export default TodoForm;
