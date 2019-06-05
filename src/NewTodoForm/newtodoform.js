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
      <div class="card mx-3 my-4">
        <div class="card-body">
          <h5 class="card-title">Add new task</h5>
          <input onChange={this.handleChange} value={this.state.text} />
          <button onClick={this.handleAddClick}>Add</button>
        </div>
      </div>
    );
  }
}

export default NewTodoForm;
