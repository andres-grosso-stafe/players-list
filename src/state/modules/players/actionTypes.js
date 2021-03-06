const NAME_SPACE = "Players";

const playersActionTypes = {
  FETCH_PLAYERS: `${NAME_SPACE}/FETCH_PLAYERS`,
  FETCH_PLAYERS_ERROR: `${NAME_SPACE}/FETCH_PLAYERS_ERROR`,
  FETCH_PLAYERS_SUCCESS: `${NAME_SPACE}/FETCH_PLAYERS_SUCCESS`,
  FETCH_PLAYERS_FAILURE: `${NAME_SPACE}/FETCH_PLAYERS_FAILURE`,

  UPDATE_PLAYERS_LIST: `${NAME_SPACE}/UPDATE_PLAYERS_LIST`,

  CLEAR_FILTERED_PLAYERS_LIST: `${NAME_SPACE}/CLEAR_FILTERED_PLAYERS_LIST`
};

export default playersActionTypes;
