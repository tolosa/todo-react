import React, { Component } from 'react';

class NewTodoForm extends Component {
  state = { text: '' };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }
  render() {
    return(
      <div class="card mx-3 my-4">
        <div class="card-body">
          <h5 class="card-title">Add new task</h5>
          <input onChange={this.handleChange} />
          <button onClick={() => this.props.onAdd(this.state.text)}>Add</button>
        </div>
      </div>
    );
  }
}

export default NewTodoForm;
