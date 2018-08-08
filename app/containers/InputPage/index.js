import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Input from './input';
import Form from './form';
import injectReducer from 'utils/injectReducer';
import { changeCurrentString, insertString } from './actions';
import { makeSelectNewString } from './selectors';
import reducer from './reducer';


/* eslint-disable react/prefer-stateless-function */
export class InputPage extends React.PureComponent {
  render() {
    return (
      <div>
         <Form onSubmit={this.props.onSubmitForm}>
          <label>
            {/* <FormattedMessage {...messages.trymeMessage} /> */}
            {/* <AtPrefix>
              <FormattedMessage {...messages.trymeAtPrefix} />
            </AtPrefix> */}
            <Input
              id="string-id"
              type="text"
              name="input"
              placeholder="Enter Your String"
              value={this.props.newString}
              onChange={this.props.handleChange}
            />
          </label>
        </Form>
      </div>
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

function mapDispatchToProps(dispatch) {
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