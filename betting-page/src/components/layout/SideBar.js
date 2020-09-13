import React from 'react';
import { connect } from 'react-redux';

const SideBar = ({ user }) => {
  return (
    <div className={user === null ? 'hide' : ''}>
      <ul id='slide-out' className='sidenav sidenav-fixed' style={{ width: 'auto', background: '#14181C', color: '#525A66' }}>
        <li>
          <div className='user-view' style={{ padding: '0', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column' }}>
            <a className='sidenav-close' href='#!' style={{ color: '#525A66' }}>
              <i className='medium material-icons'>account_circle</i>
            </a>
            <h6 className='white-text' style={{ marginBottom: '0' }}>{user === null ? '' : user.name}</h6>
            <p className='white-text' style={{ marginTop: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className='small material-icons'>attach_money</i> {user === null ? '' : user.balance} Ft</p>
          </div>
        </li>
        <div className='divider' style={{ opacity: '0.1' }}></div>
        <li><a href='#!' ><p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>Active bets</p></a></li>
        <div className='divider' style={{ opacity: '0.1' }}></div>
        <ul>
          <li>
            <a href='#!'>
              <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>Favourite clubs</p>
            </a>
          </li>
          {user !== null && user.favouriteTeams.length !== 0 ? user.favouriteTeams.map(club => (
            <li key={club.id}>
              <a href='#!' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <img src={club.logo} alt='Club logo' style={{ height: '30px', marginRight: '10px' }} />
                <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>{club.name}</p>
              </a>
            </li>)) :
            <li>
              <a href='#!' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <i className="material-icons" style={{ color: '#525A66' }}>add</i>
                <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>Please add teams</p>
              </a>
            </li>}
        </ul>

        <div className='divider' style={{ opacity: '0.1' }}></div>

        <ul>
          <li>
            <a href='#!'>
              <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>Favourite Leagues</p>
            </a>
          </li>
          {user !== null && user.favouriteLeagues.length !== 0 ? user.favouriteLeagues.map(league => (
            <li key={league.id}>
              <a href='#!' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <img src={league.logo} alt='League logo' style={{ height: '30px', marginRight: '10px' }} />
                <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>{league.name}</p>
              </a>
            </li>
          )) : <li>
              <a href='#!' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <i className="material-icons" style={{ color: '#525A66' }}>add</i>
                <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>Please add leagues</p>
              </a>
            </li>}
        </ul>
        <div className='divider' style={{ opacity: '0.1' }}></div>
      </ul>
    </div>
  )
}
const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(SideBar)
