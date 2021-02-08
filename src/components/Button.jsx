import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Button({ children, to }) {
  return (
    <Link
      className="rounded border-2 border-gray-800 px-2.5 py-1.5 text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300 ease"
      to={to}
    >
      {children}
    </Link>
  );
}

Button.defaultProps = {
  to: '/',
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string,
};

export default Button;
