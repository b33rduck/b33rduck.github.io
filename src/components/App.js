import React from 'react';
import Footer from './Footer/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-wrapper">
        <Footer />
      </div>
    );
  }
}
