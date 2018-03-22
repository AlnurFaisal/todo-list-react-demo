import React from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import TodoItem from "../todo-item/TodoItem";
import TodoForm from "../todo-form/TodoForm";

describe("TodoList", () => {
  it("should render TodoList properly", () => {
    const wrapper = shallow(<TodoList />);

    expect(wrapper.find("#todo-list")).toHaveLength(1);
    expect(wrapper.find("h1#todo-title")).toHaveLength(1);
    expect(wrapper.find("TodoItem")).toHaveLength(wrapper.state().todos.length);
    expect(wrapper.find(TodoForm)).toHaveLength(1);
  });

  /*it("should listen and trigger onclick event that will check whether completed is set to do", () => {
    const wrapper = shallow(<TodoList />);
    const firstTodo = wrapper.find("TodoItem").first();
    firstTodo.simulate("click");
    console.log(firstTodo);
    expect(firstTodo).toBe(true);
  });*/
});
