import React from 'react';
import PropTypes from 'prop-types';

function Container({ children, wide }) {
  return (
    <div className={`w-full mx-auto px-3 ${wide ? 'max-w-7xl' : 'max-w-5xl'}`}>{children}</div>
  );
}

Container.defaultProps = {
  wide: false,
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
  wide: PropTypes.bool,
};

export default Container;
