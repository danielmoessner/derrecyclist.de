import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, href }) {
  return (
    <a
      className="rounded border-2 border-gray-800 px-2.5 py-1.5 text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300 ease"
      href={href}
    >
      {children}
    </a>
  );
}

Button.defaultProps = {
  href: '/',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  href: PropTypes.string,
};

export default Button;
