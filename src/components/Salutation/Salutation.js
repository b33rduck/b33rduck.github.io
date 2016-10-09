import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './salutation.css';

const ENTER_KEY_CODE = 13;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.userName || undefined,
      name: undefined, // todo move this into state
      hasName: this.props.userName ? true : false,
    };
    // this.save = this.save.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.setState({ 
        name: e.target.value,
        hasName: !this.state.hasName,
      });
    }
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  // save(e) {
  //   if (e.target.value.trim()) {
  //     this.props.onSave(e.target.value);
  //     this.setState({
  //       value: '',
  //     });
  //   }
  // }

  render() {
    const year = new Date().getFullYear();
    const { hasName } = this.state;

    const classes = classNames({ hasName: hasName });
    let input;
    if (hasName) {
      input = (<h1>Hello {this.state.name}</h1>);
    }

    return (
      <div className="salutation">
        <h1 className={ classes } >What's your Name
          <input
            type="text" 
            placeholder={ this.state.placeholder }
            autoFocus={ 1 }
            onBlur={ this.onKeyDown }
            onKeyDown={ this.onKeyDown }
            onChange={ this.onChange }
          />
        </h1>
        {input}
      </div>
    );
  }
}

Footer.propTypes = {
  userName: PropTypes.string,
  placeholder: PropTypes.string,
  // onSave: PropTypes.func.isRequired,
};

export default Footer;
