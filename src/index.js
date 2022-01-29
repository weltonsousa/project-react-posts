import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import Home from './templates/Home';

ReactDOM.render(

  //componet
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  //componet
  document.getElementById('root')
);
