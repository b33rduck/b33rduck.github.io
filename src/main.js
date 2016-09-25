import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// import basic styles
import './styles/normalize.css';
import './styles/main.css';

if (ENV !== 'production') {
  // Enable LiveReload
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
}


const currentdate = new Date();
console.info(`${currentdate.toLocaleTimeString()} \\\\ You can't stop here, this is b33rduck land.`);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
