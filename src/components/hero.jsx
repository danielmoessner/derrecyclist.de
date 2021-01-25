import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import ImageFluid from '../types/ImageFluid';

function Hero({ image, alt, preview }) {
  return (
    <section className="w-full">
      <div className="shadow rounded-lg">
        {!preview ? (
          <Img className="rounded-lg" fluid={image} alt={alt} />
        ) : (
          <div className="rounded-lg overflow-hidden">{image}</div>
        )}
      </div>
    </section>
  );
}

Hero.defaultProps = {
  preview: false,
};

Hero.propTypes = {
  image: ImageFluid.isRequired,
  preview: PropTypes.bool,
  alt: PropTypes.string.isRequired,
};

export default Hero;
