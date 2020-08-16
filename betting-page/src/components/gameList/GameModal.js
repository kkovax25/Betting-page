import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGameEvents } from '../../actions/gameActions';
import GameModalList from './GameModalList';

const GameModal = ({ currentGame, getGameEvents, gameEvents }) => {
  useEffect(() => {
    if (currentGame !== null) {
      getGameEvents(currentGame.fixture.id)
    }
  }, [currentGame, getGameEvents])

  return (
    <div id='match-details-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <div className='row white-text'>
          <h4 className='center'>Game details </h4>
          <div className="col s12">
            {currentGame === null ? null : (
              <div className='center'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img style={{ height: '30px', marginRight: '10px' }} src={currentGame.teams.home.logo} alt="HomeLogo" className=" responsive-img" />
                  <p style={{ margin: '0' }} >
                    {currentGame.teams.home.name}</p>
                  <span className="grey-text" style={{ margin: '0 10px' }}>
                    {currentGame.goals.home === null || currentGame.goals.away === null ? ' vs ' :
                      `${currentGame.goals.home} - ${currentGame.goals.away}`
                    }
                  </span>
                  <p style={{ margin: '0' }} >
                    {currentGame.teams.away.name}</p>
                  <img style={{ height: '30px', marginLeft: '10px' }} src={currentGame.teams.away.logo} alt="AwayLogo" className=" responsive-img" />
                </div>

                <p className='center'>Competition: <span className='grey-text'> {currentGame.league.name} <img style={{ height: '15px' }} src={currentGame.league.flag} alt={currentGame.league.country} /></span>
                </p>
                <p className="center">Round: <span className='grey-text'>{currentGame.league.round}</span></p>
                <p className="center">City: <span className="grey-text">{currentGame.fixture.venue.city}</span></p>
                <p className="center">Stadium: <span className="grey-text">{currentGame.fixture.venue.name}</span></p>
                <GameModalList />
              </div>

            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '50%',
  height: '70%',
  background: '#2D333A'

}

const mapStateToProps = state => ({
  currentGame: state.games.currentGame,
  gameEvents: state.games.gameEvents
})
export default connect(mapStateToProps, { getGameEvents })(GameModal)

