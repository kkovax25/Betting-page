import React from 'react';
import GameListItem from './GameListItem';
import { connect } from 'react-redux';
import { getGames } from '../../actions/gameActions';
import Preloader from '../layout/Preloader';

const GameList = ({ games }) => {
  return (
    <div style={{ height: '500px', overflow: 'scroll' }}>
      {games === null || games.length === 0
        ? <Preloader />
        : games.map(game =>
          <GameListItem game={game} key={game.fixture.id} />)
      }
    </div>
  )
}

const mapStateToProps = state => ({
  games: state.games.games
})
export default connect(mapStateToProps, { getGames })(GameList)
