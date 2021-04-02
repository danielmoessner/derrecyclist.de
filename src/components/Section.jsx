import React from 'react';
import PropTypes from 'prop-types';

function Section({ children, hidden }) {
  return (
    <section
      className={`w-full flex-none bg-gray-100 odd:bg-gray-100 flex scroll-snap-align-center md:h-screen ${
        hidden ? 'hidden' : ''
      }`}
    >
      {children}
    </section>
  );
}

Section.defaultProps = {
  hidden: false,
};

Section.propTypes = {
  children: PropTypes.element.isRequired,
  hidden: PropTypes.bool,
};

export default Section;
