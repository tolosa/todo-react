import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Todo extends Component {
  handleOnDelete = () => {
    if(window.confirm('Are you sure you want to delete this task?')) {
      this.props.onDelete();
    }
  }
  render() {
    return (
      <li className="list-group-item d-flex align-items-center">
        {this.props.title}
        <FontAwesomeIcon
          icon="times-circle" size="lg" className="text-danger ml-auto"
          onClick={this.handleOnDelete} />
      </li>
    );
  }
}

export default Todo;
