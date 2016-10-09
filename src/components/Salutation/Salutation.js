import React from 'react';
import './salutation.css';

export default class Footer extends React.Component {

  render() {
    const year = new Date().getFullYear();
    return (
      <div className="salutation">
        <h1>Your name <input type="text" /></h1>
      </div>
    );
  }
}
