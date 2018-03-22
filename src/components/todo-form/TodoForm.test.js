import React from "react";
import { shallow } from "enzyme";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
    it('should have a form defined and the form should be able to be called ', () => {
        const mockCallback = jest.fn();
        const wrapper = shallow(<TodoForm handleSubmit={mockCallback} />);

        expect(wrapper.find("input")).toHaveLength(2);
        wrapper.find("form").simulate("submit", { preventDefault() {} });
        expect(mockCallback).toBeCalled();
    });
});