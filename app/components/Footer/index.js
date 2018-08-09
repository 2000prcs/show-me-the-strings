import React from 'react';
import NavBar from './NavBar';
import Link from '../Link';

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <Link to="/">
            Homepage
          </Link>
          <Link to="/input">
            Enter Your String
          </Link>
        </NavBar>
      </div>
    );
  }
}

export default Footer;