import React, { Component } from 'react';
import InPlaceEdit from './InPlaceEdit/inplaceedit';
import CustomCheckbox from './CustomCheckbox/customcheckbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Todo extends Component {
  handleOnDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      this.props.onDelete();
    }
  }

  handleOnChange = (checked) => {
    this.props.onChecked(checked);
  }

  render() {
    return (
      <li className="list-group-item d-flex align-items-center">
        <CustomCheckbox checked={this.props.isDone} onChange={this.handleOnChange} />
        <InPlaceEdit value={this.props.title} onChange={this.props.onChange} />
        <FontAwesomeIcon onClick={this.handleOnDelete} icon={faTrashAlt}
          size="lg" className="text-danger ml-2 cursor-pointer" />
      </li>
    );
  }
}

export default Todo;
