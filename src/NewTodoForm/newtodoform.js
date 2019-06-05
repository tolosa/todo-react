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
    const isValid = !!text.trim();
    this.setState({text, isValid});
  }
  render() {
    return(
      <div className="card bg-light">
        <div className="card-body">
          <h5 className="card-title">Add new task</h5>
          <div className="form-group">
            <input onChange={this.handleChange} value={this.state.text} className="form-control form-control-lg" />
          </div>
          <button onClick={this.handleAddClick} disabled={!this.state.isValid} className="btn btn-primary">Add task</button>
        </div>
      </div>
    );
  }
}

export default NewTodoForm;
