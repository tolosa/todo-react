import React, { Component } from 'react';
import InPlaceEdit from './InPlaceEdit/inplaceedit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Todo extends Component {
  handleOnDelete = () => {
    if(window.confirm('Are you sure you want to delete this task?')) {
      this.props.onDelete();
    }
  }

  handleOnChecked = (event) => {
    const checked = event.currentTarget.checked;
    this.props.onChecked(checked);
  }

  render() {
    return (
      <li className="list-group-item d-flex align-items-center">
        <input type="checkbox" className="mr-2"
          onChange={this.handleOnChecked} checked={this.props.isDone} />
        <InPlaceEdit value={this.props.title} onChange={(value) => this.props.onChange(value)} />
        <FontAwesomeIcon
          icon="times-circle" size="lg" className="text-danger ml-auto cursor-pointer"
          onClick={this.handleOnDelete} />
      </li>
    );
  }
}

export default Todo;
