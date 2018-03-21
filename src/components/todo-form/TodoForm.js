import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodos: { description: "", isCompleted: false }
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Add Todo Item:
          <input
            type="text"
            value={this.state.newTodos.description}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleChange(event) {
    this.setState({
      newTodos: {
        description: event.target.value,
        isCompleted: false
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.newTodos);
    this.props.handleSubmit(this.state.newTodos);
    this.setState({
        newTodos: { description: "", isCompleted: false }
    })
  }
}

export default TodoForm;
