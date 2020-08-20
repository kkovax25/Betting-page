import React from 'react'

const LeagueCard = () => {
  return (
    <div style={style.containerStyle}
      className='row hide-on-small-only'>
      <div className="col s1 hoverable"
        style={{ ...style.divStyle, background: '#04FF87', margin: '0' }}>
        <img style={style.imgStyle} src='img/leagueIcons/premierleague.png' alt='League logo'></img>
      </div>
      <div className="col s1 hoverable"
        style={{ ...style.divStyle, background: '#FC7136' }}>
        <img style={style.imgStyle} src='img/leagueIcons/laliga.png' alt='League logo'></img>
      </div>
      <div className="col s1 hoverable"
        style={{ ...style.divStyle, background: '#004F8C' }}>
        <img style={style.imgStyle} src='img/leagueIcons/seriea.png' alt='League logo'></img>
      </div>
      <div className="col s1 hoverable"
        style={{ ...style.divStyle, background: '#D2010C' }}>
        <img style={style.imgStyle} src='img/leagueIcons/bundesliga.png' alt='League logo'></img>
      </div>
      <div className="col s1 hoverable"
        style={{ ...style.divStyle, background: '#DBE021' }}>
        <img style={style.imgStyle} src='img/leagueIcons/ligue1.png' alt='League logo'></img>
      </div>
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
  divStyle: {
    height: '130px',
    width: '130px',
    borderRadius: '20px',
  }
}

export default LeagueCard
