import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return <li className="list-group-item">{this.props.title}</li>;
  }
}

export default Todo;
