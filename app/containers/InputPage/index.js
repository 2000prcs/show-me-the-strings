import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Title from '../../components/Title';
import Wrapper from '../../components/Title/Wrapper';

/* eslint-disable react/prefer-stateless-function */
export default class InputPage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
      </Wrapper>
    );
  }
}
