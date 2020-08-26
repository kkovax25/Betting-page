import React from 'react'

const SideBar = () => {
  return (
    <div>
      <ul id='slide-out' className='sidenav sidenav-fixed' style={{ width: 'auto', background: '#14181C', color: '#525A66' }}>
        <li>
          <div className='user-view' style={{ padding: '0', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column' }}>
            <a className='sidenav-close' href='#!' style={{ color: '#525A66' }}>
              <i className='medium material-icons'>account_circle</i>
            </a>
            <h6 className='white-text' style={{ marginBottom: '0' }}>Kovács Krisztián</h6>
            <p className='white-text' style={{ marginTop: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className='small material-icons'>attach_money</i> 20.000 Ft</p>
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
          <li>
            <a href='#!' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <img src='https://media.api-sports.io/football/teams/529.png' alt='Club logo' style={{ height: '30px', marginRight: '10px' }} />
              <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>Fc Barcelona</p>
            </a>
          </li>
          <li>
            <a href='#!' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <img src='https://media.api-sports.io/football/teams/165.png' alt='Club logo' style={{ height: '30px', marginRight: '10px' }} />
              <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>Borussia Dortmund</p>
            </a>
          </li>
          <li>
            <a href='#!' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <img src='https://media.api-sports.io/football/teams/42.png' alt='Club logo' style={{ height: '30px', marginRight: '10px' }} />
              <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>Arsenal</p>
            </a>
          </li>
        </ul>

        <div className='divider' style={{ opacity: '0.1' }}></div>

        <ul>
          <li>
            <a href='#!'>
              <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>Favourite Leagues</p>
            </a>
          </li>
          <li>
            <a href='#!' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <img src='https://media.api-sports.io/football/leagues/140.png' alt='League logo' style={{ height: '30px', marginRight: '10px' }} />
              <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>Primera Division</p>
            </a>
          </li>
          <li>
            <a href='#!' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <img src='https://media.api-sports.io/football/leagues/78.png' alt='League logo' style={{ height: '30px', marginRight: '10px' }} />
              <p style={{ margin: '0', fontSize: '12px', textTransform: 'uppercase', color: '#525A66' }}>Bundesliga 1</p>
            </a>
          </li>
        </ul>
        <div className='divider' style={{ opacity: '0.1' }}></div>
      </ul>
      <a href='#!' data-target='slide-out' className='sidenav-trigger left' style={{ color: '#525A66' }}>
        <i className='small material-icons '>menu</i>
      </a>
      <div style={{ display: "flex", flexFlow: 'row', alignItems: "center", justifyContent: 'space-evenly', border: '0px solid red', width: '80%' }}>
        <h6 className='white-text' style={{ margin: '0' }}>Kovács Krisztián</h6>
        <p className='white-text' style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
          <i className='small material-icons'>attach_money</i>
          20.000 Ft</p>
      </div>

    </div>
  )
}

export default SideBar
