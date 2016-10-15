import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

const ENTER_KEY_CODE = 13;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  color: #ffffff;
`;
const Input = styled.input`
  display: ${props => props.hasName ? 'none' : 'block'};
  border: none;
  border-bottom: 2px solid #ffffff;
  background-color:rgba(0, 0, 0, 0);
  width: 5.500em;
  color: #ffffff;

  &:focus {
    padding-left: 0.250em;
    border: none;
    border-bottom: 2px solid #ffffff;
    overflow: auto;
    outline: none;
    box-shadow: none;
  }
`;

class Salutation extends React.Component {
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

    let caption = 'What\'s your name';
    let input = (<Input
            type="text" 
            placeholder={ this.state.placeholder }
            autoFocus={ 1 }
            onBlur={ this.onKeyDown }
            onKeyDown={ this.onKeyDown }
            onChange={this.onChange }
          />);
    if (hasName) {
      input = undefined;
      caption = `Hello ${this.state.name}`;
    }

    return (
      <Container>
        <h1>
          {caption}
          {input}
        </h1>
      </Container>
    );
  }
}

Salutation.propTypes = {
  userName: PropTypes.string,
  placeholder: PropTypes.string,
  // onSave: PropTypes.func.isRequired,
};

export default Salutation;
