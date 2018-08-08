import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';

function List({ strings, loading, error }) {
  // const ComponentToRender = props.component;
  let content = <div />;

  // If we have items, render them
  if (strings) {
    content = strings.map(string => <li key={string.id}>{string.id} {string.string}</li>);
    // Otherwise render a single component
  } else if (loading) {
    content = <div>Loading data</div>;
  } else if (error){
    content = <div>Error occured!</div>;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  // component: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.bool]),
};

export default List;