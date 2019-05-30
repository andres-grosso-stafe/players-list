import axios from "axios";

export const fetchAllPlayers = () =>
  axios.get(
    "https://football-players-b31f2.firebaseio.com/players.json?print=pretty"
  );
