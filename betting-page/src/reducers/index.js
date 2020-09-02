import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import authReducer from './authReducer';

export default combineReducers({
  games: gameReducer,
  auth: authReducer
})