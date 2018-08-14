/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
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
import Table from '../../components/Table';
import { getStrings } from '../App/actions';
import saga from './saga';


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
      <Table {...stringsListProps} />
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.bool]),
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