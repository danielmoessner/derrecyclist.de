import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

function NavigationLink({ to, children }) {
  return (
    <Link className="px-2 py-4 uppercase text-sm tracking-wider font-medium" to={to}>
      {children}
    </Link>
  );
}

NavigationLink.defaultProps = {
  to: '#',
};

NavigationLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default NavigationLink;
