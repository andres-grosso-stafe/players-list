import React from "react";
import { shallow, mount, render } from "enzyme";
import { Filters } from "./";

const filterByPositionValues = [
  "Centre-Forward",
  "Keeper",
  "Centre-Back",
  "Left-Back",
  "Right-Back",
  "Defensive Midfield",
  "Central Midfield",
  "Left Midfield",
  "Attacking Midfield",
  "Left Wing"
];

const minProps = {
  onSearch: () => {},
  filtersList: [
    {
      name: "name",
      type: "input",
      restrictionRegExp: new RegExp("[A-Za-z]"),
      restriction: "only-letters"
    },
    {
      name: "position",
      type: "select",
      values: filterByPositionValues
    },
    {
      name: "age",
      type: "input",
      restriction: "only-numbers",
      restrictionRegExp: new RegExp("[0-9]"),
      htmlRestrictions: {
        min: 18,
        max: 40
      }
    }
  ]
};

describe("Template Rendering", () => {
  it("It should render without crashing", () => {
    shallow(
      <Filters filterByPositionValues={filterByPositionValues} {...minProps} />
    );
  });

  it("It should render 2 inputs and 1 select", () => {
    const wrapper = shallow(
      <Filters filterByPositionValues={filterByPositionValues} {...minProps} />
    );
    expect(wrapper.find("input").length).toBe(2);
    expect(wrapper.find("select").length).toBe(1);
  });

  it("It should render the search button", () => {
    const wrapper = shallow(
      <Filters filterByPositionValues={filterByPositionValues} {...minProps} />
    );
    const button = wrapper.find("button");
    expect(button.length).toBe(1);
    expect(button.text()).toBe("Search");
  });
});

describe("Inner methods", () => {
  it("It should change state when key are pressed on text inputs", () => {
    const wrapper = mount(
      <Filters filterByPositionValues={filterByPositionValues} {...minProps} />
    );
    wrapper
      .instance()
      .onKeyUpHandler("age", {}, { target: { value: 24 } }, "toInt");

    expect(wrapper.instance().state.searchParams.age).toBe(24);
  });

  it("It should change state when select change", () => {
    const wrapper = mount(
      <Filters filterByPositionValues={filterByPositionValues} {...minProps} />
    );

    wrapper
      .instance()
      .onChangeHandler("position", { target: { value: "Centre-Forward" } });

    expect(wrapper.instance().state.searchParams.position).toBe(
      "Centre-Forward"
    );
  });
});
