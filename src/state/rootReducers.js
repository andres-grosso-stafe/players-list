import { combineReducers } from "redux";
import playersReducers from "./modules/players/reducers/players.reducers";

export default combineReducers({
  players: playersReducers
});
