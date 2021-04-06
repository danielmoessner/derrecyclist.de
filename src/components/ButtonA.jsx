import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, href, target }) {
  return (
    <a
      className="rounded border-2 border-gray-800 px-2.5 py-1.5 text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300 ease"
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}

Button.defaultProps = {
  href: '/',
  target: '_blank',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
};

export default Button;
