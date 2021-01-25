import PropTypes from 'prop-types';

const ImageFluid = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    fluid: PropTypes.shape({
      aspectRatio: PropTypes.number.isRequired,
      base64: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      sizes: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
    }),
  }),
});

export default ImageFluid;
