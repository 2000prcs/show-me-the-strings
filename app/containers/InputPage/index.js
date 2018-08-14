import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Wrapper from './Wrapper';
import Input from '../../components/Input';
import Form from '../../components/Form';
import injectReducer from 'utils/injectReducer';
import { changeCurrentString, insertString } from './actions';
import { makeSelectNewString } from './selectors';
import reducer from './reducer';


export class InputPage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
         <Form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="string">
            <Input
              id="string"
              type="text"
              placeholder="Enter Your String"
              value={this.props.newString}
              onChange={this.props.handleChange}
            />
          </label>
        </Form>
      </Wrapper>
    );
  }
}


InputPage.propTypes = {
  onSubmitForm: PropTypes.func,
  newString: PropTypes.string,
  handleChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newString: makeSelectNewString(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: e => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(insertString());
    },
    handleChange: e => {
      e.preventDefault();
      dispatch(changeCurrentString(e.target.value));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'input', reducer });

export default compose(
  withConnect,
  withReducer,
)(InputPage);