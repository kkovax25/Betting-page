import React, { useState } from 'react';
import { connect } from 'react-redux';
import Preloader from '../layout/Preloader';
import GameListItem from '../gameList/GameListItem';

const TopLeagues = ({ currentLeague, league, games }) => {
  const [open, setOpen] = useState(true);
  const activeLeague = currentLeague.find(element => element.short === league)
  let filteredGames;
  if (games !== null) {
    filteredGames = games.filter(element => element.league.id === activeLeague.id)
  } else {
    filteredGames = undefined
  }

  return (
    <ul className='collapsible' style={{ border: 'none', boxShadow: 'none', color: '#5f6776' }}>
      <li className='active' onClick={() => setOpen(!open)} >
        <div className='collapsible-header' style={{ ...style.flex, background: 'none', borderBottom: '1px solid rgb(95,103,118,0.5) ' }}>
          <span style={{ ...style.flex, width: '100px' }}>
            <img style={{ height: '20px' }} src={activeLeague.flag} alt='Country logo'>
            </img>
            {activeLeague.country}
          </span>
          <span style={{ ...style.flex, width: '170px' }}>
            <img style={{ height: '20px' }} src={activeLeague.logo} alt='League logo'>
            </img>
            {activeLeague.name}
          </span>
          <span>
            {open === true ?
              <i className='tiny material-icons'>arrow_drop_up</i>
              :
              <i className='tiny material-icons'>arrow_drop_down</i>
            }
          </span>
        </div>
        <div className='collapsible-body' style={{ border: 'none' }}>
          {(() => {
            if (filteredGames === undefined) {
              return (
                <Preloader />
              )
            } else if (filteredGames.length === 0) {
              return (
                <p className='center'>No games to show...</p>
              )
            } else {
              return (
                filteredGames.map(game =>
                  <GameListItem game={game} />)
              )
            }
          })()}
        </div>
      </li>
    </ul>
  )
}

const style = {
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

const mapStateToProps = state => ({
  games: state.games.games,
  currentLeague: state.games.topLeagues
})

export default connect(mapStateToProps)(TopLeagues)
