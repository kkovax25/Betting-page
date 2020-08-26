import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import GameListModal from './components/gameList/GameModal';
import SideBar from './components/layout/SideBar';
import LeagueCard from './components/leagueCard/LeagueCard';
import Tab from './components/layout/Tab';
import LeagueModal from './components/leagueCard/LeagueModal';
import Header from './components/layout/Header';

function App() {
  useEffect(() => {
    M.AutoInit();
  })


  return (
    <Provider store={store}>
      <div className="row" style={{ background: '#1D2328' }}>
        <div className="col s12 m0 l2 " style={{ background: '#14181C', minWidth: '240px' }}>
          <SideBar></SideBar>
        </div>
        <div className="col s12 m10 l8" style={{ border: '0px solid white', padding: '0' }}>
          <Header></Header>
          <div style={{ width: '90%', margin: '0 auto' }}>
            <LeagueCard />
            <Tab></Tab>
            <GameListModal></GameListModal>
            <LeagueModal></LeagueModal>
          </div>
        </div>
        <div className="col s12 m2 l2" style={{ height: '300vh', background: '#14181C' }}></div>
      </div>
    </Provider>
  );
}

export default App;
