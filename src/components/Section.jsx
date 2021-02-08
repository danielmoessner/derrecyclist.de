import React from 'react';
import PropTypes from 'prop-types';

function Section({ children }) {
  return (
    <section className="md:min-h-screen lg:h-screen w-full flex-none bg-gray-100 odd:bg-gray-100 flex scroll-snap-align-center">
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Section;
