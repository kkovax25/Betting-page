import React from 'react';
import { connect } from 'react-redux';
import LeagueModalStanding from './LeagueModalStanding';
import { getLeagueTopScorers } from '../../actions/gameActions';
import LeagueModalTopScorer from './LeagueModalTopScorer';


const LeagueModal = ({ currentLeague }) => {
  return (
    <div id="leagueModal" className="modal" style={modalStyle}>
      <div className="modal-content">
        {currentLeague === null ? <h4 style={{ color: 'white' }}>League Name</h4>
          : (
            <h4 style={{ color: 'white' }}>{currentLeague.name}</h4>
          )}
        <div className="row">
          <div className="col l7 m6 s12">
            <LeagueModalStanding />
          </div>
          <div className="col l5 m6 s12"  >
            <p style={{ margin: '14px 0 0 0', fontSize: '17px', fontWeight: '500', color: '#9E9E9E' }}>League Top Scorers</p>
            <LeagueModalTopScorer />
          </div>
        </div>

      </div>

    </div>
  )
}

const modalStyle = {
  width: '60%',
  height: '70%',
  background: '#2D333A'

}
const mapStateToProps = state => ({
  currentLeague: state.games.leagueStanding,
})
export default connect(mapStateToProps, { getLeagueTopScorers })(LeagueModal);
