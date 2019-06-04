import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return <li class="list-group-item">{this.props.title}</li>;
  }
}

export default Todo;
