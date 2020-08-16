import React, { useEffect } from 'react';
import GameListItem from './GameListItem';
import { connect } from 'react-redux';
import { getGames } from '../../actions/gameActions';
import Preloader from '../layout/Preloader';

const GameList = ({ games, getGames }) => {
  useEffect(() => {
    getGames()
    //eslint-disable-next-line
  }, [])
  return (
    <div style={{ height: '300px', width: '100%', overflow: 'scroll' }}>
      {games === null || games.response.length === 0
        ? <Preloader />
        : games.response.map(game =>
          <GameListItem game={game} key={game.fixture.id} />)
      }
    </div>
  )
}

const mapStateToProps = state => ({
  games: state.games.games
})
export default connect(mapStateToProps, { getGames })(GameList)
