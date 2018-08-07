import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import FooterLink from './FooterLink';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <FooterLink to="/">
            Homepage
          </FooterLink>
          <FooterLink to="/input">
            Enter Your String
          </FooterLink>
        </NavBar>
      </div>
    );
  }
}

export default Footer;