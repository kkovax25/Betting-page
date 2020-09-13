import { SET_LOADING, GET_GAMES, LOGS_ERROR, SET_CURRENT, GET_GAME_EVENTS, SET_CURRENT_LEAGUE, GET_LEAGUE_STANDINGS, GET_LEAGUE_TOP_SCORERS } from '../actions/types';

const initialState = {
  loading: false,
  games: null,
  currentGame: null,
  gameEvents: null,
  currentLeague: null,
  leagueStanding: null,
  leagueTopScorers: null,
  topLeagues: [
    {
      name: 'Premier League',
      short: 'epl',
      id: 39,
      background: '#04FF87',
      imgSrc: 'img/leagueIcons/premierleague.png',
      country: "England",
      flag: "img/countryIcons/england.svg",
      logo: "https://media.api-sports.io/football/leagues/39.png",
    },
    {
      name: 'Primera Division',
      short: 'laLiga',
      id: 140,
      background: '#FC7136',
      imgSrc: 'img/leagueIcons/laliga.png',
      country: "Spain",
      flag: "img/countryIcons/spain.svg",
      logo: "https://media.api-sports.io/football/leagues/140.png",
    },
    {
      name: 'Serie A',
      short: 'serie',
      id: 135,
      background: '#004F8C',
      imgSrc: 'img/leagueIcons/seriea.png',
      country: "Italy",
      flag: "img/countryIcons/italy.svg",
      logo: "https://media.api-sports.io/football/leagues/135.png",
    },
    {
      name: 'Bundesliga 1',
      short: 'bundes',
      id: 78,
      background: '#D2010C',
      imgSrc: 'img/leagueIcons/bundesliga.png',
      country: "Germany",
      flag: "img/countryIcons/germany.svg",
      logo: "https://media.api-sports.io/football/leagues/78.png",
    },
    {
      name: 'Ligue 1',
      short: 'ligue',
      id: 61,
      background: '#DBE021',
      imgSrc: 'img/leagueIcons/ligue1.png',
      country: "France",
      flag: "img/countryIcons/france.svg",
      logo: "https://media.api-sports.io/football/leagues/61.png",
    },
  ]
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