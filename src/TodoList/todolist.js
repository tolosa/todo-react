import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return(
      <div class="card">
        <ul class="list-group list-group-flush">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default TodoList;
