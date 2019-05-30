import axios from "axios";

export default axios.create({
  baseURL: "https://football-players-b31f2.firebaseio.com/"
});
