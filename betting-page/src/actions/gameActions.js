import { GET_GAMES, SET_LOADING, LOGS_ERROR, GET_GAME_EVENTS, SET_CURRENT, SET_CURRENT_LEAGUE, GET_LEAGUE_STANDINGS, GET_LEAGUE_TOP_SCORERS } from './types';

export const getGames = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("http://localhost:5000/api/teams/games")
    const data = await res.json();

    dispatch({
      type: GET_GAMES,
      payload: data.data[3]
    })

  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err
    })
  }
}
export const getLiveGames = () => async dispatch => {
  try {
    setLoading();
    const url = 'https://v3.football.api-sports.io/fixtures?live=all'

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        Accept: 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: GET_GAMES,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err
    })
  }
}

export const getFinishedGames = (date) => async dispatch => {
  try {
    setLoading();
    const url = `https://v3.football.api-sports.io/fixtures?date=${date}&status=FT`

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        Accept: 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: GET_GAMES,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err
    })
  }
}
export const getScheduledGames = (date) => async dispatch => {
  try {
    setLoading();
    const url = `https://v3.football.api-sports.io/fixtures?date=${date}&status=NS`

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        Accept: 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: GET_GAMES,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err
    })
  }
}

export const getLeagueStanding = (id) => async dispatch => {
  try {
    setLoading();
    const url = `https://v3.football.api-sports.io/standings?league=${id}&season=2019`

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        Accept: 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: GET_LEAGUE_STANDINGS,
      payload: data.response[0].league
    })

  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err
    })
  }
}
export const getLeagueTopScorers = (id) => async dispatch => {
  try {
    setLoading();
    const url = `https://v3.football.api-sports.io/players/topscorers?season=2019&league=${id}`

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        Accept: 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: GET_LEAGUE_TOP_SCORERS,
      payload: data.response
    })

  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

export const setCurrent = (game) => {
  return {
    type: SET_CURRENT,
    payload: game
  }
}
export const setCurrentLeague = (league) => {
  return {
    type: SET_CURRENT_LEAGUE,
    payload: league
  }
}



export const getGameEvents = (currentGameId) => async dispatch => {
  try {
    const url = `https://v3.football.api-sports.io/fixtures/events?fixture=${currentGameId}`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        Accept: 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: GET_GAME_EVENTS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err
    })
  }
}