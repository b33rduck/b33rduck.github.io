import React, { PropTypes } from 'react';
import './salutation.css';

const ENTER_KEY_CODE = 13;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.userName || '',
      userName: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.setState({ 
        userName: e.target.value
      });
    }
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const year = new Date().getFullYear();
    console.info(this.state.userName);
    return (
      <div className="salutation">
        <h1>What's your Name
          <input 
            type="text" 
            placeholder={ this.state.placeholder }
            value= { this.state.value }
            autoFocus={ 1 }
            onBlur={ this.onKeyDown }
            onKeyDown={ this.onKeyDown }
            onChange={ this.onChange }
          />
        </h1>
      </div>
    );
  }
}

Footer.propTypes = {
  userName: PropTypes.string,
  placeholder: PropTypes.string
};

export default Footer;
