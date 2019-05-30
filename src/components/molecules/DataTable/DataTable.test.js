import React from "react";
import { shallow, mount } from "enzyme";
import { DataTable } from "./";

const minProps = {
  rows: [
    {
      contractUntil: "2022-06-30",
      dateOfBirth: "1993-05-13",
      jerseyNumber: 9,
      name: "Romelu Lukaku",
      nationality: "Belgium",
      position: "Centre-Forward",
      age: 26
    },
    {
      contractUntil: "2019-06-30",
      dateOfBirth: "1990-11-07",
      jerseyNumber: 1,
      name: "David de Gea",
      nationality: "Spain",
      position: "Keeper",
      age: 29
    }
  ],
  headers: [
    {
      name: "Player",
      position: "Position",
      nationality: "Team",
      age: "Age"
    }
  ]
};

describe("Template Rendering", () => {
  it("It should render without crashing", () => {
    shallow(<DataTable {...minProps} />);
  });

  it("It should render a table structure", () => {
    const wrapper = shallow(<DataTable {...minProps} />);
    expect(wrapper.find("table").length).toBe(1);
    expect(wrapper.find("thead").length).toBe(1);
    expect(wrapper.find("tbody").length).toBe(1);
  });
});
