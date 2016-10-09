import React from 'react';
import Footer from './Footer/Footer';
import Salutation from './Salutation/Salutation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-wrapper">
        <Salutation />
        <Footer />
      </div>
    );
  }
}
