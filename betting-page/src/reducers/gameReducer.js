import { SET_LOADING, GET_GAMES, LOGS_ERROR, SET_CURRENT, GET_GAME_EVENTS } from '../actions/types';

const initialState = {
  loading: false,
  games: null,
  currentGame: null,
  gameEvents: null

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
    case SET_CURRENT:
      return {
        ...state,
        currentGame: action.payload
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