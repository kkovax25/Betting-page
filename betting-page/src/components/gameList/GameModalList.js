import React from 'react';
import { connect } from 'react-redux';

const GameModalList = ({ gameEvents }) => {
  return (
    <table className='centered responsive-table'>
      <thead>
        <tr>
          <th style={{ width: '25%' }}>Event</th>
          <th style={{ width: '25%' }}>Time</th>
          <th style={{ width: '25%' }}>Team</th>
          <th style={{ width: '25%' }}>Player</th>
        </tr>
      </thead>
      <tbody>
        {gameEvents === null ? null :
          (gameEvents.response.map(event =>
            <tr>
              <td >
                <img src={(() => {
                  switch (event.type) {
                    case "Goal": return '/img/gameEventIcons/goal.svg';
                    case "Card": if (event.detail === 'Red Card') {
                      return '/img/gameEventIcons/redcard.svg';
                    } else {
                      return '/img/gameEventIcons/yellowcard.svg';
                    }
                    case "subst": return '/img/gameEventIcons/subst.svg';
                    default: return " ";
                  }
                })()}
                  style={{ height: '30px' }}
                  alt="team"
                />
              </td>
              {event.time.extra === null
                ? <td>{event.time.elapsed}'</td>
                : <td>{event.time.elapsed}+{event.time.extra}'
                </td>
              }
              <td>
                <img src={event.team.logo}
                  alt="teamLogo"
                  style={{ height: '30px' }} />
              </td>
              <td >{event.type !== 'subst'
                ? event.player.name
                : <span>
                  <i className="tiny material-icons"
                    style={{ color: 'red' }}>
                    arrow_downward
                  </i>
                  {event.assist.name}
                  <br />
                  <i className="tiny material-icons"
                    style={{ color: 'green' }}>
                    arrow_upward
                 </i>
                  {event.player.name}
                </span>}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
const mapStateToProps = state => ({
  gameEvents: state.games.gameEvents
})

export default connect(mapStateToProps)(GameModalList)
