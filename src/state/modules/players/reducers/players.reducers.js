import playersActionTypes from "../actionTypes";

const initialState = {
  isFetching: false,
  error: "",
  playersList: [],
  filteredPlayersList: []
};

const playersReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case playersActionTypes.FETCH_PLAYERS:
      return {
        ...state,
        isFetching: true
      };
    case playersActionTypes.FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        isFetching: initialState.isFetching,
        error: initialState.error,
        playersList: payload
      };
    case playersActionTypes.FETCH_PLAYERS_ERROR:
      return {
        ...state,
        isFetching: initialState.isFetching,
        error: payload.error,
        playerList: initialState.playerList
      };
    case playersActionTypes.UPDATE_PLAYERS_LIST:
      return {
        ...state,
        isFetching: initialState.isFetching,
        error: initialState.error,
        filteredPlayersList: payload
      };
    case playersActionTypes.CLEAR_FILTERED_PLAYERS_LIST:
      return {
        ...state,
        isFetching: initialState.isFetching,
        error: initialState.error,
        filteredPlayersList: initialState.filteredPlayersList
      };

    default:
      return {
        ...state
      };
  }
};

export default playersReducers;
