import React from 'react';
import PropTypes from 'prop-types';

function Section({ children, hidden }) {
  return (
    <section
      className={`md:min-h-screen lg:h-screen w-full flex-none bg-gray-100 odd:bg-gray-100 flex scroll-snap-align-center ${
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
