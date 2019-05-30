import React from "react";
import { shallow } from "enzyme";
import { Loader } from "./";

describe("Template Rendering", () => {
  it("It should render without crashing", () => {
    shallow(<Loader />);
  });

  it("It should have a loader class", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find(".loader").length).toBe(1);
  });

  it("It should render a Loading text", () => {
    const wrapper = shallow(<Loader />);
    const appTitle = wrapper.find(".loader");
    expect(appTitle.text()).toBe("Loading...");
  });
});
