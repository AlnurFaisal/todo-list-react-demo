import React, { Component } from "react";
import "./TodoForm.css";

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
          <input id="addlist"
            type="text"
            value={this.state.newTodos.description}
            onChange={this.handleChange.bind(this)}
          />
        <input type="submit" value="Add new item" id="button1"/>
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
