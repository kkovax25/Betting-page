import React from 'react';
import { connect } from 'react-redux';

const LeagueModalTopScorer = ({ leagueTopScorer }) => {
  return (
    <ul className="collection" style={{ color: '#9E9E9E', border: 'none' }}>
      {leagueTopScorer === null ? null : leagueTopScorer.slice(0, 5).map(players =>
        <li key={players.player.id} className="collection-item avatar" style={{ background: 'transparent', border: 'none' }}>
          <img src={players.player.photo} alt="PlayerPicture" className="circle" />
          <span className="title">{players.player.name}</span>
          <p> {players.statistics[0].team.name}<br />
            Goals: {players.statistics[0].goals.total}
          </p>
        </li>)
      }
    </ul>
  )
}


const mapStateToProps = state => ({
  leagueTopScorer: state.games.leagueTopScorers
})

export default connect(mapStateToProps)(LeagueModalTopScorer)
