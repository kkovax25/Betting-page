import React from 'react';
import { connect } from 'react-redux';
import { setCurrent } from '../../actions/gameActions';

const GameListItem = ({ game, setCurrent }) => {

  const unixConverter = unixDay => {
    const unixTimestamp = unixDay;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleString('en-US', { month: "short", day: 'numeric' });
  };
  const unixConverterHour = unixHour => {
    const unixTimestamp = unixHour;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleString('hu-HU', { hour: 'numeric', minute: "numeric" });
  };

  return (
    <div style={style.container} className="row">
      <div style={{ textAlign: 'center' }} className="col s1">
        <p style={{ margin: '0' }}>
          {game.fixture.status.short === '1H'
            || game.fixture.status.short === 'HT'
            || game.fixture.status.short === '2H'
            ? `${game.fixture.status.elapsed}'`
            : unixConverterHour(game.fixture.timestamp)}
          <br />
          <span style={{ fontSize: '10px' }} className='grey-text'>
            {unixConverter(game.fixture.timestamp)}
          </span>
        </p>
      </div>
      <div className="col s1">
        {game.fixture.status.short === '1H'
          || game.fixture.status.short === 'HT'
          || game.fixture.status.short === '2H'
          ?
          (<div style={{ ...style.statusIconStyle, background: 'red' }}>
            <p style={style.statusTextStyle}>live</p>
          </div>) :
          (<div style={{ ...style.statusIconStyle, background: '#9e9e9e' }}>
            <p style={style.statusTextStyle}>
              {game.fixture.status.short}
            </p>
          </div>)}
      </div>
      <div style={style.teamContainer} className="col s3 offset-s1">
        <img style={{ height: '30px' }} src={game.teams.home.logo} alt="HomeLogo" className=" responsive-img" />
        <p style={{ margin: '0' }} >
          {game.teams.home.name}</p></div>
      <div className="col s2">
        <a style={{ boxShadow: 'none', background: '#3f4853' }} href='#!'
          className={`btn-floating btn-small ${(() => {
            switch (game.fixture.status.short) {
              case "1H": return 'pulse';
              case "HT": return 'pulse';
              case "2H": return 'pulse';
              default: return " ";
            }
          })()}`}>
          {game.goals.home}-{game.goals.away}</a>
      </div>
      <div style={style.teamContainer} className="col s3">
        <img style={{ height: '30px' }} src={game.teams.away.logo} alt="AwayLogo" className=" responsive-img" />
        <p style={{ margin: '0' }} >
          {game.teams.away.name}
        </p>
      </div>
      <div className="col s3 offset-s1" style={{ fontSize: '13px' }}><a href='#match-details-modal' className='grey-text modal-trigger'
        onClick={() => setCurrent(game)}>
        Preview
        <br />
        match details...
        </a>
      </div>
    </div>
  )
}

const style = {
  container: {
    background: '#2D333A',
    color: '#FBFCFC',
    display: "flex",
    alignItems: 'center',
    textAlign: 'center',
  },
  statusIconStyle: {
    height: '15px',
    width: '30px',
    borderRadius: '5px'
  },
  statusTextStyle: {
    textTransform: 'uppercase',
    fontSize: '10px',
    margin: '0'
  },
  teamContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}

export default connect(null, { setCurrent })(GameListItem);
