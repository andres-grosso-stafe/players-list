import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as playersActions from "../actions";
import * as playersActionTypes from "../actionTypes";
import fetchMock from "fetch-mock";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates SUCCESS when fetching players has been done", () => {
    fetchMock.getOnce(
      "https://football-players-b31f2.firebaseio.com/players.json?print=pretty"
    );

    const expectedAction = [
      { type: playersActionTypes.FETCH_PLAYERS },
      {
        type: playersActionTypes.FETCH_PLAYERS_SUCCESS,
        body: [
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
          },
          {
            contractUntil: "2021-06-30",
            dateOfBirth: "1987-02-22",
            jerseyNumber: 20,
            name: "Sergio Romero",
            nationality: "Argentina",
            position: "Keeper"
          },
          {
            contractUntil: "2020-06-30",
            dateOfBirth: "1994-04-12",
            jerseyNumber: 3,
            name: "Eric Bailly",
            nationality: "Cote d'Ivoire",
            position: "Centre-Back"
          },
          {
            contractUntil: "2019-06-30",
            dateOfBirth: "1989-11-22",
            jerseyNumber: 12,
            name: "Chris Smalling",
            nationality: "England",
            position: "Centre-Back"
          },
          {
            contractUntil: "2019-06-30",
            dateOfBirth: "1990-03-20",
            jerseyNumber: 5,
            name: "Marcos Rojo",
            nationality: "Argentina",
            position: "Centre-Back"
          },
          {
            contractUntil: "2019-06-30",
            dateOfBirth: "1992-02-21",
            jerseyNumber: 4,
            name: "Phil Jones",
            nationality: "England",
            position: "Centre-Back"
          },
          {
            contractUntil: "2019-06-30",
            dateOfBirth: "1990-03-09",
            jerseyNumber: 17,
            name: "Daley Blind",
            nationality: "Netherlands",
            position: "Left-Back"
          },
          {
            contractUntil: "2018-06-30",
            dateOfBirth: "1995-07-12",
            jerseyNumber: 23,
            name: "Luke Shaw",
            nationality: "England",
            position: "Left-Back"
          },
          {
            contractUntil: "2019-06-30",
            dateOfBirth: "1989-12-02",
            jerseyNumber: 36,
            name: "Matteo Darmian",
            nationality: "Italy",
            position: "Right-Back"
          },
          {
            contractUntil: "2019-06-30",
            dateOfBirth: "1985-08-04",
            jerseyNumber: 25,
            name: "Antonio Valencia",
            nationality: "Ecuador",
            position: "Right-Back"
          },
          {
            contractUntil: "2018-06-30",
            dateOfBirth: "1981-07-28",
            jerseyNumber: 16,
            name: "Michael Carrick",
            nationality: "England",
            position: "Defensive Midfield"
          },
          {
            contractUntil: "2021-06-30",
            dateOfBirth: "1993-03-15",
            jerseyNumber: 6,
            name: "Paul Pogba",
            nationality: "France",
            position: "Central Midfield"
          },
          {
            contractUntil: "2019-06-30",
            dateOfBirth: "1989-08-14",
            jerseyNumber: 21,
            name: "Ander Herrera",
            nationality: "Spain",
            position: "Central Midfield"
          },
          {
            contractUntil: "2018-06-30",
            dateOfBirth: "1987-11-22",
            jerseyNumber: 27,
            name: "Marouane Fellaini",
            nationality: "Belgium",
            position: "Central Midfield"
          },
          {
            contractUntil: "2018-06-30",
            dateOfBirth: "1985-07-09",
            jerseyNumber: 18,
            name: "Ashley Young",
            nationality: "England",
            position: "Left Midfield"
          },
          {
            contractUntil: "2019-06-30",
            dateOfBirth: "1988-04-28",
            jerseyNumber: 8,
            name: "Juan Mata",
            nationality: "Spain",
            position: "Attacking Midfield"
          },
          {
            contractUntil: "2021-06-30",
            dateOfBirth: "1992-12-15",
            jerseyNumber: 14,
            name: "Jesse Lingard",
            nationality: "England",
            position: "Left Wing"
          },
          {
            contractUntil: "2019-06-30",
            dateOfBirth: "1995-12-05",
            jerseyNumber: 11,
            name: "Anthony Martial",
            nationality: "France",
            position: "Left Wing"
          },
          {
            contractUntil: "2018-06-30",
            dateOfBirth: "1981-10-03",
            jerseyNumber: 10,
            name: "Zlatan Ibrahimovic",
            nationality: "Sweden",
            position: "Centre-Forward"
          },
          {
            contractUntil: "2020-06-30",
            dateOfBirth: "1997-10-31",
            jerseyNumber: 19,
            name: "Marcus Rashford",
            nationality: "England",
            position: "Centre-Forward"
          },
          {
            contractUntil: "2022-06-30",
            dateOfBirth: "1988-12-19",
            jerseyNumber: 7,
            name: "Alexis Sánchez",
            nationality: "Chile",
            position: "Left Wing"
          },
          {
            contractUntil: "2020-06-30",
            dateOfBirth: "1988-08-01",
            jerseyNumber: 31,
            name: "Nemanja Matic",
            nationality: "Serbia",
            position: "Defensive Midfield"
          },
          {
            contractUntil: "2021-06-30",
            dateOfBirth: "1994-07-17",
            jerseyNumber: 2,
            name: "Victor Lindelöf",
            nationality: "Sweden",
            position: "Centre-Back"
          },
          {
            contractUntil: "2021-06-30",
            dateOfBirth: "1996-06-28",
            jerseyNumber: 40,
            name: "Joel Pereira",
            nationality: "Portugal",
            position: "Keeper"
          },
          {
            contractUntil: "2020-06-30",
            dateOfBirth: "1997-02-02",
            jerseyNumber: 43,
            name: "Cameron Borthwick-Jackson",
            nationality: "England",
            position: "Left-Back"
          },
          {
            contractUntil: "2021-06-30",
            dateOfBirth: "1996-12-08",
            jerseyNumber: 39,
            name: "Scott McTominay",
            nationality: "Scotland",
            position: "Attacking Midfield"
          }
        ]
      }
    ];

    const store = mockStore({});
    return store.dispatch(playersActionTypes.FETCH_PLAYERS()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
