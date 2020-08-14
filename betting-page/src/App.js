import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  useEffect(() => {
    M.AutoInit();
  })


  return (
    <Provider store={store}>
      <div>
      </div>
    </Provider>
  );
}

export default App;
