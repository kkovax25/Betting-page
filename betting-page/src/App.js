import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './components/pages/HomePage';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authActions';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    M.AutoInit();
  })


  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
