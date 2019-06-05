import React, { Component } from 'react';

class NewTodoForm extends Component {
  state = { text: '' };
  handleChange = (e) => {
    this.setTextState(e.target.value);
  }
  handleAddClick = () => {
    this.props.onAdd(this.state.text);
    this.setTextState('');
  }
  setTextState(text) {
    this.setState({text});
  }
  render() {
    return(
      <div class="card bg-light">
        <div class="card-body">
          <h5 class="card-title">Add new task</h5>
          <div class="form-group">
            <input onChange={this.handleChange} value={this.state.text} class="form-control form-control-lg" />
          </div>
          <button onClick={this.handleAddClick} class="btn btn-primary">Add task</button>
        </div>
      </div>
    );
  }
}

export default NewTodoForm;
