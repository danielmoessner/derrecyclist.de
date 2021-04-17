import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Container from './Container';
import GatsbyImageData from '../types/GatsbyImageData';

function InnerSection({ position, children, backgroundImage, wide }) {
  const wrapperStyles = () => {
    if (position === 'left') return 'lg:flex-row-reverse flex flex-col';
    if (position === 'bottom') return 'flex flex-col';
    return '';
  };

  const imageStyles = () => {
    if (position === 'left') return 'flex-1 lg:h-auto';
    if (position === 'bottom') return 'flex-1 lg:h-0';
    return '';
  };

  const contentStyles = () => {
    if (position === 'left') return 'lg:w-96 lg:max-h-screen lg:overflow-y-scroll scrollbar-small';
    return '';
  };

  const paddingStyles = () => {
    if (position === 'left') return 'pt-12 pb-16 lg:pl-4 lg:pr-6 lg:pt-12 lg:pb-24';
    if (position === 'bottom') return 'pt-12 pb-16 lg:pb-12';
    return '';
  };

  return (
    <div className={`flex-1 ${wrapperStyles()}`}>
      <div className={`bg-green-600 h-96 ${imageStyles()}`}>
        <GatsbyImage
          className="w-full h-full"
          image={backgroundImage.childImageSharp.gatsbyImageData}
          alt="Hintergrundbild Sektion"
        />
      </div>
      <div className={contentStyles()}>
        <div className={paddingStyles()}>
          <Container wide={wide}>{children}</Container>
        </div>
      </div>
    </div>
  );
}

InnerSection.defaultProps = {
  position: 'bottom',
  wide: false,
};

InnerSection.propTypes = {
  children: PropTypes.element.isRequired,
  position: PropTypes.oneOf(['left', 'bottom']),
  backgroundImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: GatsbyImageData,
    }),
  }).isRequired,
  wide: PropTypes.bool,
};

export default InnerSection;
