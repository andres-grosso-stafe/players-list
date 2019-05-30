import React from "react";
import { shallow, mount, render } from "enzyme";
import { PlayerList } from "./App";

import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore({
  players: {
    isFetching: false,
    playersList: [
      {
        contractUntil: "2022-06-30",
        dateOfBirth: "1993-05-13",
        jerseyNumber: 9,
        name: "Romelu Lukaku",
        nationality: "Belgium",
        position: "Centre-Forward"
      },
      {
        contractUntil: "2019-06-30",
        dateOfBirth: "1990-11-07",
        jerseyNumber: 1,
        name: "David de Gea",
        nationality: "Spain",
        position: "Keeper"
      }
    ]
  }
});

const minProps = {
  playersList: [
    {
      contractUntil: "2022-06-30",
      dateOfBirth: "1993-05-13",
      jerseyNumber: 9,
      name: "Romelu Lukaku",
      nationality: "Belgium",
      position: "Centre-Forward"
    },
    {
      contractUntil: "2019-06-30",
      dateOfBirth: "1990-11-07",
      jerseyNumber: 1,
      name: "David de Gea",
      nationality: "Spain",
      position: "Keeper"
    }
  ],
  filteredPlayersList: [
    {
      contractUntil: "2022-06-30",
      dateOfBirth: "1993-05-13",
      jerseyNumber: 9,
      name: "Romelu Lukaku",
      nationality: "Belgium",
      position: "Centre-Forward",
      age: 20
    },
    {
      contractUntil: "2019-06-30",
      dateOfBirth: "1990-11-07",
      jerseyNumber: 1,
      name: "David de Gea",
      nationality: "Spain",
      position: "Keeper",
      age: 24
    }
  ]
};

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

const customFilters = [
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
];

describe("Template Rendering", () => {
  it("It should render without crashing", () => {
    shallow(<PlayerList store={store} {...minProps} />);
  });

  it("It should have an app class", () => {
    const wrapper = shallow(<PlayerList store={store} {...minProps} />);
    expect(wrapper.find(".app").length).toBe(1);
  });

  it("It should render a title", () => {
    const wrapper = shallow(<PlayerList store={store} {...minProps} />);
    const appTitle = wrapper.find(".app__title");
    expect(appTitle.length).toBe(1);
    expect(appTitle.text()).toBe("Footbal Player Finder");
  });

  it("It should render Loader if 'isFetching' is true", () => {
    const wrapper = mount(
      <PlayerList
        filterByPositionValues={filterByPositionValues}
        customFilters={customFilters}
        store={store}
        isFetching={true}
        {...minProps}
      />
    );

    expect(wrapper.find(".loader").length).toBe(1);
  });
});

describe("Lifecycle methods", () => {
  it("It should wait for user list on CDM", async () => {
    const wrapper = mount(
      <PlayerList
        filterByPositionValues={filterByPositionValues}
        customFilters={customFilters}
        store={store}
        {...minProps}
      />
    );
    const instance = wrapper.instance();
    await instance.componentDidMount();
  });
});

describe("Inner methods", () => {
  it("It should filter players", () => {
    const wrapper = mount(
      <PlayerList
        filterByPositionValues={filterByPositionValues}
        customFilters={customFilters}
        store={store}
        {...minProps}
      />
    );

    expect(wrapper.instance().filterPlayers({ name: "Romelu" }).length).toBe(1);
  });
});
