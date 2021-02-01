import React from 'react';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return <main className="relative">{children}</main>;
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default Layout;
