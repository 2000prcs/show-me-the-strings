/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Title from '../../components/Title';
import Wrapper from '../../components/Title/Wrapper';
import { getStrings } from '../App/actions';

// import List from '../../components/List';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.getStrings();
  }

  render() {
    return (
      <div>
      <Wrapper>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
      </Wrapper>
      {/* <List /> */}
      </div>
    );
  }
}
