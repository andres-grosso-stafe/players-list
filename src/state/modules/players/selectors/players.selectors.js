import { createSelector } from "reselect";

export const playersSelector = state => state.players;

export const isFetching = createSelector(
  playersSelector,
  players => players.isFetching
);

export const playersList = createSelector(
  playersSelector,
  players => players.playersList
);

export const filteredPlayersList = createSelector(
  playersSelector,
  players => players.filteredPlayersList
);

export const filterByPositionValues = createSelector(
  playersSelector,
  players => [...new Set(players.playersList.map(player => player.position))]
);
