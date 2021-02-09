import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Container from './Container';
import ImageFluid from '../types/ImageFluid';

function InnerSection({ position, children, backgroundImage }) {
  const wrapperStyles = () => {
    if (position === 'left') return 'md:flex-row-reverse flex flex-col';
    if (position === 'bottom') return 'flex flex-col';
    return '';
  };

  const imageStyles = () => {
    if (position === 'left') return 'md:w-8/12 lg:w-4/5';
    if (position === 'bottom') return 'md:h-4/5';
    return '';
  };

  const contentStyles = () => {
    if (position === 'left')
      return 'md:w-4/12 lg:w-1/5 md:max-h-screen md:overflow-y-scroll scrollbar-small';
    if (position === 'bottom') return 'md:h-1/5';
    return '';
  };

  const paddingStyles = () => {
    if (position === 'left') return 'pt-12 pb-16 md:pl-4 md:pr-6 md:pt-12 md:pb-24';
    if (position === 'bottom') return 'pt-12 pb-16 md:pb-0';
    return '';
  };

  return (
    <div className={`flex-1 ${wrapperStyles()}`}>
      <div className={`bg-green-600 h-96 md:h-auto ${imageStyles()}`}>
        <Img className="w-full h-full" fluid={backgroundImage.childImageSharp.fluid} />
      </div>
      <div className={contentStyles()}>
        <div className={paddingStyles()}>
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  );
}

InnerSection.defaultProps = {
  position: 'bottom',
};

InnerSection.propTypes = {
  children: PropTypes.element.isRequired,
  position: PropTypes.oneOf(['left', 'bottom']),
  backgroundImage: ImageFluid.isRequired,
};

export default InnerSection;
