import React from 'react';
import GameListModal from '../gameList/GameModal';
import SideBar from '../layout/SideBar';
import LeagueCard from '../leagueCard/LeagueCard';
import Tab from '../layout/Tab';
import LeagueModal from '../leagueCard/LeagueModal';
import Header from '../layout/Header';
import Navbar from '../layout/NavBar';
import Login from '../auth/Login';
const HomePage = () => {
  return (
    <div className="row" style={{ background: '#1D2328' }}>
      <div className="col s12 m0 l2 " style={{ background: '#14181C', minWidth: '240px' }}>
        <SideBar></SideBar>
      </div>
      <div className="col s12 m10 l8" style={{ border: '0px solid white', padding: '0' }}>
        <Navbar />
        <Header />
        <Login />
        <div style={{ width: '90%', margin: '0 auto' }}>
          <LeagueCard />
          <Tab />
          <GameListModal />
          <LeagueModal />
        </div>
      </div>
      <div className="col s12 m2 l2" style={{ height: '300vh', background: '#14181C' }}></div>
    </div>
  )
}

export default HomePage
