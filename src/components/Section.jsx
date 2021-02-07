import React from 'react';
import PropTypes from 'prop-types';

function Section({ children }) {
  return (
    <section
      className="h-screen w-full flex-none bg-gray-100 odd:bg-gray-100 flex"
      style={{ scrollSnapAlign: 'center' }}
    >
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Section;
