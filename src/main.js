import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// import basic styles
import './styles/normalize.css';
import './styles/main.css';

const currentdate = new Date();
console.info(`${currentdate.toLocaleTimeString()} \\\\ You can't stop here, this is b33rduck land.`);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
