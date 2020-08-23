import { SET_LOADING, GET_GAMES, LOGS_ERROR, SET_CURRENT, GET_GAME_EVENTS, SET_CURRENT_LEAGUE, GET_LEAGUE_STANDINGS, GET_LEAGUE_TOP_SCORERS } from '../actions/types';

const initialState = {
  loading: false,
  games: null,
  currentGame: null,
  gameEvents: null,
  currentLeague: null,
  leagueStanding: null,
  leagueTopScorers: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
        loading: false
      }
    case GET_GAME_EVENTS:
      return {
        ...state,
        gameEvents: action.payload
      }
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_LEAGUE_STANDINGS:
      return {
        ...state,
        leagueStanding: action.payload
      }
    case GET_LEAGUE_TOP_SCORERS:
      return {
        ...state,
        leagueTopScorers: action.payload
      }
    case SET_CURRENT:
      return {
        ...state,
        currentGame: action.payload
      }
    case SET_CURRENT_LEAGUE:
      return {
        ...state,
        currentLeague: action.payload
      }
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}