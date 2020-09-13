import React from 'react';
import { connect } from 'react-redux';
import { setCurrentLeague, getLeagueStanding, getLeagueTopScorers } from '../../actions/gameActions'

const LeagueCard = ({ leagues, setCurrentLeague, getLeagueStanding, getLeagueTopScorers }) => {
  const getLeagueInfo = (league) => {
    setCurrentLeague(league);
    getLeagueStanding(league.id);
    getLeagueTopScorers(league.id)
  }
  return (
    <div style={style.containerStyle}
      className='row hide-on-small-only'>
      {leagues.map(league => (
        <a href="#leagueModal" className='col s1 hoverable leagueCard modal-trigger' style={{ ...style.cardStyle, background: league.background }} key={league.id} onClick={() => getLeagueInfo(league)}>
          <img style={style.imgStyle} src={league.imgSrc} alt='League logo'>
          </img>
        </a>
      ))}
    </div >
  )
}

const style = {
  containerStyle: {
    height: '200px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 0 20px'
  },
  imgStyle: {
    height: '65px',
    marginTop: '22px'
  },
  cardStyle: {
    height: '130px',
    width: '130px',
    borderRadius: '20px',
  }
}

const mapStateToProps = state => ({
  leagues: state.games.topLeagues
})

export default connect(mapStateToProps, { setCurrentLeague, getLeagueStanding, getLeagueTopScorers })(LeagueCard);