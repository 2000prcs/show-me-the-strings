import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import FooterLink from './FooterLink';
import messages from './messages';
import Button from '../Button';

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <Button to="/">
            Homepage
          </Button>
          <Button to="/input">
            Enter Your String
          </Button>
        </NavBar>
      </div>
    );
  }
}

export default Footer;