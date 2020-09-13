import React, { useEffect } from 'react'
import GameList from '../gameList/GameList'
import { connect } from 'react-redux';
import { getGames, getLiveGames, getFinishedGames, getScheduledGames } from '../../actions/gameActions';
const Tab = ({ getGames, getLiveGames, getFinishedGames, getScheduledGames }) => {
  useEffect(() => {
    getGames(date());
    //eslint-disable-next-line
  }, [])

  const date = () => {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`
  }


  return (
    <div className="row">
      <div className="col s12">
        <ul className="tabs" style={{ marginBottom: '10px', background: 'none' }}>

          <li className="tab"><a style={style.tabStyle} href="#allGames" className='active' onClick={getGames}>All Games</a></li>

          <li className="tab"><a style={style.tabStyle} href="#liveGames" onClick={getLiveGames} >Live Games</a></li>

          <li className="tab"><a style={style.tabStyle} href="#finishedGames" onClick={() => getFinishedGames(date())}>Finished Games</a></li>

          <li className="tab"><a style={style.tabStyle} href="#scheduledGames" onClick={() => getScheduledGames(date())}>Scheduled</a></li>
        </ul>
      </div>
      <div id="allGames" className="col s12"><GameList /></div>
      <div id="liveGames" className="col s12">
        <GameList />
      </div>
      <div id="finishedGames" className="col s12">
        <GameList />
      </div>
      <div id="scheduledGames" className="col s12">
        <GameList />
      </div>
    </div>

  )
}
const style = {
  tabStyle: {
    color: '#5f6776',
    fontSize: '13px',
    textTransform: 'capitalize'
  }
}

const mapStateToProps = state => ({
  games: state.games.games
})
export default connect(mapStateToProps, { getGames, getLiveGames, getFinishedGames, getScheduledGames })(Tab);
