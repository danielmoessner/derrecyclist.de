import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

function Component({ children, maxWidthClass, showBottom }) {
  return (
    <>
      <div className="relative z-0 -mt-24">
        <div className="absolute flex flex-col inset-0">
          <div className="h-24" />
          <div className="flex-1 bg-gray-200 w-full" />
        </div>
        <Container>
          <div
            className={`px-4 pb-3 pt-4 mx-auto bg-gray-100 rounded shadow relative z-30 ${maxWidthClass} lg:px-10 lg:pt-8 lg:pb-6`}
          >
            {children}
          </div>
        </Container>
      </div>
      {showBottom && <div className="bg-gray-200" style={{ minHeight: '50vh' }} />}
    </>
  );
}

Component.defaultProps = {
  maxWidthClass: '',
  showBottom: true,
};

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  maxWidthClass: PropTypes.string,
  showBottom: PropTypes.bool,
};

export default Component;
