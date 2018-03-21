import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import TodoItem from "../todo-item/TodoItem";
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
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>
        {this.state.todos.map((todo, i) => {
          return <TodoItem key={i} todo={todo} handleClick={this.handleClick.bind(this, i)}/>;
        })}
      </div>
    );
  }

  handleClick(i){
    const todosCopy = [...this.state.todos];
    const todoUpdated = todosCopy[i];
    todoUpdated.isCompleted ? todoUpdated["isCompleted"] = false : todoUpdated["isCompleted"] = true;

    this.setState({
      todos: todosCopy
    })

  }
 
}

export default TodoList;
