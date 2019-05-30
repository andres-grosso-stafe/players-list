import playersActionsTypes from "../actionTypes";
import playersReducer from "./players.reducers";

const initialState = {
  isFetching: false,
  error: "",
  playersList: [],
  filteredPlayersList: []
};

describe("Players Reducers", () => {
  it("It should return default state", () => {
    const newState = playersReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("It should return fetching state when receive FETCH_PLAYERS type", () => {
    const newState = playersReducer(undefined, {
      type: playersActionsTypes.FETCH_PLAYERS
    });

    const updatedState = { isFetching: true };
    expect(newState).toEqual({ ...initialState, ...updatedState });
  });

  it("It should return error state when receive FETCH_PLAYERS_ERROR type", () => {
    const newState = playersReducer(undefined, {
      type: playersActionsTypes.FETCH_PLAYERS_ERROR,
      payload: { error: "API SERVER SERROR, PLEASE TRY AGAIN" }
    });

    const updatedState = {
      isFetching: false,
      error: "API SERVER SERROR, PLEASE TRY AGAIN"
    };
    expect(newState).toEqual({ ...initialState, ...updatedState });
  });

  it("It should return a player list state when receive UPDATE_PLAYERS_LIST type", () => {
    const newState = playersReducer(undefined, {
      type: playersActionsTypes.UPDATE_PLAYERS_LIST,
      payload: [
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
    });

    const updatedState = {
      filteredPlayersList: [
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
    };
    expect(newState).toEqual({ ...initialState, ...updatedState });
  });

  it("It should return error state when receive CLEAR_FILTERED_PLAYERS_LIST type", () => {
    const newState = playersReducer(undefined, {
      type: playersActionsTypes.CLEAR_FILTERED_PLAYERS_LIST
    });

    expect(newState).toEqual({ ...initialState });
  });
});
