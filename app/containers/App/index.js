/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import HomePage from 'containers/HomePage/Loadable';
import InputPage from 'containers/InputPage/Loadable';
import messages from '../HomePage/messages';
import Title from '../../components/Title';
import Wrapper from '../../components/Title/Wrapper';
import Footer from '../../components/Footer';

export default function App() {
  return (
    <div>
      <Wrapper>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
      </Wrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/input" component={InputPage} />
      </Switch>
      <Footer />
    </div>
  );
}
