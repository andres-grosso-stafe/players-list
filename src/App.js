import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Filters from "./components/molecules/Filters";
import DataTable from "./components/organisms/DataTable";
import Loader from "./components/atoms/Loader";

import * as playersActions from "./state/modules/players/actions";
import * as playersSelectors from "./state/modules/players/selectors";

import "./App.scss";

export class PlayerList extends Component {
  componentDidMount() {
    const { playersThunks } = this.props;

    if (playersThunks) {
      playersThunks.fetchPlayers();
    }
  }

  filterPlayers = searchParams => {
    let { playersThunks, playersList, filteredPlayersList } = this.props;

    console.log("searchParams", searchParams);
    console.log("playersList", playersList);
    console.log("filteredPlayersList", filteredPlayersList);

    const filteredPlayers = Object.entries(searchParams).map((key, value) => {
      console.log(key, value);
      const newFilteredList = playersList.filter(player => {
        if (typeof value === "e") return player[key[0]] === value;
      });
      console.log(newFilteredList);
    });

    // TODO fix it
    // const baseList = filteredPlayersList.length
    //   ? filteredPlayersList
    //   : playersList;

    // const filteredPlayers = baseList.filter(player => {
    //   debugger;
    //   for (let key in searchParams) {
    //     let result;
    //     const value = player[key.toLowerCase()];
    //     if (typeof value === "number") {
    //       if (searchParams[key] === value) {
    //         result = player.name;
    //       }
    //     }
    //     if (typeof value === "string") {
    //       if (value.indexOf(searchParams[key]) > -1) {
    //         result = player.name;
    //       }
    //     }

    //     return result;
    //   }
    // });
    // return filteredPlayers;
    // playersThunks.fillFilteredPlayerList(filteredPlayers);
  };

  render() {
    const {
      isFetching,
      playersList,
      filteredPlayersList,
      filterByPositionValues
    } = this.props;

    const list = filteredPlayersList.length ? filteredPlayersList : playersList;
    const customHeaders = [
      {
        name: "Player",
        position: "Position",
        nationality: "Team",
        age: "Age"
      }
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

    return (
      <div className="app">
        <span className="app__title">Footbal Player Finder</span>
        {isFetching ? (
          <Loader />
        ) : (
          <Fragment>
            <Filters
              filtersList={customFilters}
              onSearch={this.filterPlayers}
            />
            <DataTable rows={list} headers={customHeaders} />
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: playersSelectors.isFetching(state),
  playersList: playersSelectors.playersList(state),
  filteredPlayersList: playersSelectors.filteredPlayersList(state),
  filterByPositionValues: playersSelectors.filterByPositionValues(state)
});

const mapDispatchToProps = dispatch => ({
  playersThunks: bindActionCreators(playersActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList);
