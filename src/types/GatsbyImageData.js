import PropTypes from 'prop-types';

const GatsbyImageData = PropTypes.shape({
  layout: PropTypes.string.isRequired,
  placeholder: PropTypes.shape({
    fallback: PropTypes.string.isRequired,
  }),
  images: PropTypes.shape({
    fallback: PropTypes.shape({
      src: PropTypes.string.isRequired,
      sizes: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
    }),
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        sizes: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
      })
    ),
  }),
  width: PropTypes.number,
  height: PropTypes.number,
});

export default GatsbyImageData;
