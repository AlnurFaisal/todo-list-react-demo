import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import TodoItem from "../todo-item/TodoItem";
import TodoForm from "../todo-form/TodoForm";
import "./TodoList.css";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  render() {
    return (
      <div id="todo-list" className="grid-container">
      <h1 id="todo-title">{this.props.title}</h1>
        {this.state.todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              todo={todo}
              handleClick={this.handleClick.bind(this, i)}
            />
          );
        })}
        <TodoForm
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }

  handleClick(i) {
    const todosCopy = [...this.state.todos];
    const todoUpdated = todosCopy[i];
    todoUpdated.isCompleted
      ? (todoUpdated["isCompleted"] = false)
      : (todoUpdated["isCompleted"] = true);

    this.setState({
      todos: todosCopy
    });
  }

  handleSubmit(newTodos) {
    const todosCopy = [...this.state.todos];
    todosCopy.push(newTodos);
    this.setState({
      todos: todosCopy
    });
  }
}

export default TodoList;
