import React from 'react';
import { connect } from 'react-redux';


const LeagueModalStanding = ({ leagueStanding }) => {
  return (
    <table className="centered" >
      <thead>
        <tr style={{ color: 'white' }}>
          <th>Pos</th>
          <th>Team</th>
          <th>Point</th>
          <th className='hide-on-med-and-down'>Form</th>
        </tr>
      </thead>
      <tbody style={{ color: 'white' }}>
        {leagueStanding === null ? null : leagueStanding.standings[0].map(pos => (<tr key={pos.team.id}>
          <td>{pos.rank}</td>
          <td style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}
          ><img className='hide-on-med-only' src={pos.team.logo} alt="Team Logo" style={{ height: '25px' }} />
            {pos.team.name}
          </td>
          <td>{pos.points}</td>
          <td className='hide-on-med-and-down'>
            <div style={{ display: "flex", flexFlow: 'row', }}>
              {pos.form.split('').map((formItem, index) =>
                <div key={index} style={{
                  height: '20px', width: '20px', marginRight: '5px', borderRadius: '5px', background: `${(() => {
                    switch (formItem) {
                      case "W": return '#44AC45';
                      case "D": return '#FFB230';
                      case "L": return '#EB3E30';
                      default: return " ";
                    }
                  })()}`
                }}>
                  {formItem}
                </div>)}
            </div>
          </td>
        </tr>))}
      </tbody>
    </table>
  )
}
const mapStateToProps = state => ({
  leagueStanding: state.games.leagueStanding
})

export default connect(mapStateToProps)(LeagueModalStanding)