import React from 'react';
import { connect } from 'react-redux';
import { setCurrentLeague, getLeagueStanding, getLeagueTopScorers } from '../../actions/gameActions'

const LeagueCard = ({ setCurrentLeague, getLeagueStanding, getLeagueTopScorers }) => {
  const leagues = [
    {
      name: 'epl',
      id: 39,
      background: '#04FF87',
      imgSrc: 'img/leagueIcons/premierleague.png'
    },
    {
      name: 'laLiga',
      id: 140,
      background: '#FC7136',
      imgSrc: 'img/leagueIcons/laliga.png'
    },
    {
      name: 'serie',
      id: 135,
      background: '#004F8C',
      imgSrc: 'img/leagueIcons/seriea.png'
    },
    {
      name: 'bundes',
      id: 78,
      background: '#D2010C',
      imgSrc: 'img/leagueIcons/bundesliga.png'
    },
    {
      name: 'ligue',
      id: 61,
      background: '#DBE021',
      imgSrc: 'img/leagueIcons/ligue1.png'
    },
  ]

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

export default connect(null, { setCurrentLeague, getLeagueStanding, getLeagueTopScorers })(LeagueCard);