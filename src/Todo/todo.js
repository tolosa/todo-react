import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Todo extends Component {
  render() {
    return (
      <li className="list-group-item d-flex align-items-center">
        {this.props.title}
        <FontAwesomeIcon icon="times-circle" size="lg" className="text-danger ml-auto" />
      </li>
    );
  }
}

export default Todo;
