import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

function NavigationLinkTop({ to, children }) {
  return (
    <Link className="px-2 py-4 uppercase text-sm tracking-wider font-medium mx-3" to={to}>
      {children}
    </Link>
  );
}

NavigationLinkTop.defaultProps = {
  to: '#',
};

NavigationLinkTop.propTypes = {
  to: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default NavigationLinkTop;
