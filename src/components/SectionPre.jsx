import React from 'react';
import PropTypes from 'prop-types';

function SectionPre({ children }) {
  return <div className="uppercase font-light text-sm text-gray-700">{children}</div>;
}

SectionPre.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SectionPre;
