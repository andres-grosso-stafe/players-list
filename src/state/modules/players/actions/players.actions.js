import moment from "moment";
import playersActionTypes from "../actionTypes";

import { fetchAllPlayers } from "../../../api/players.api";

export const fetchPlayers = () => dispatch => {
  dispatch({ type: playersActionTypes.FETCH_PLAYERS });

  fetchAllPlayers()
    .then(result => {
      const normalizedResult = result.data.map(player => {
        Object.assign({}, player);
        player.age = moment().diff(player.dateOfBirth, "years");
        return player;
      });
      dispatch({
        type: playersActionTypes.FETCH_PLAYERS_SUCCESS,
        payload: normalizedResult
      });
    })
    .catch(error => console.log(error));
};

export const fillFilteredPlayerList = fillFilteredPlayerList => dispatch => {
  dispatch({
    type: playersActionTypes.UPDATE_PLAYERS_LIST,
    payload: fillFilteredPlayerList
  });
};

export const clearFilteredPlayersList = () => dispatch => {
  dispatch({
    type: playersActionTypes.CLEAR_PLAYERS_LIST
  });
};
