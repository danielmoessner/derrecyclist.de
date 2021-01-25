import React from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className="max-w-5xl w-full mx-auto px-3">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
