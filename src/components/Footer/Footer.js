import React from 'react';
import './footer.css';

export default class Footer extends React.Component {

  render() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <div className="social">
          <a href="https://twitter.com/b33rduck" target="_blank">
            <img src="public/images/twitter.png" alt="twitter.png" />
          </a>
          <a href="https://github.com/b33rduck" target="_blank">
            <img src="public/images/gitHub.png" alt="gitHub.png" />
          </a>
          <a href="http://stackoverflow.com/users/6817880/b33rduck" target="_blank">
            <img src="public/images/stackoverflow.png" alt="stackoverflow.png" />
          </a>
        </div>
        <p>>> beerduck {year}</p>
      </footer>
    );
  }
}
