import React from 'react';
import PropTypes from 'prop-types';

function SectionHeading({ children }) {
  return <h2 className="text-2xl font-medium mb-12 text-gray-800 leading-tight">{children}</h2>;
}

SectionHeading.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SectionHeading;
