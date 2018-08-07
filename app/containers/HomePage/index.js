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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import List from '../../components/List/index';
import { getStrings } from '../App/actions';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.getStrings();
  }

  render() {
    const { loading, error, strings } = this.props;
    const stringsListProps = {
      loading,
      error,
      strings,
    };

    return (
      <div>
        <li>
          {/* {strings} */}
        </li>
        {/* <List {...stringsListProps} /> */}
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  getStrings: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getStrings: () => dispatch(getStrings()),
  };
}

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect,
)(HomePage);