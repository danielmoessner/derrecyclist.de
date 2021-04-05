import React from 'react';
import PropTypes from 'prop-types';

function SectionWrapper({ children }) {
  return (
    <main className="flex flex-none w-full flex-col flex-nowrap h-screen overflow-auto lg:scroll-snap-type-y-mandatory">
      {children}
    </main>
  );
}

SectionWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default SectionWrapper;
