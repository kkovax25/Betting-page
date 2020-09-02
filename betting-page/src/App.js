import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './components/pages/HomePage';
import Register from './components/auth/Register';

function App() {
  useEffect(() => {
    M.AutoInit();
  })


  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
