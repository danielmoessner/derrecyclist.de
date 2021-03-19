import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import { Link } from 'gatsby';
import ImageSlider from './ImageSlider';
import GatsbyImageData from '../types/GatsbyImageData';

function Bike({ bike, texts, preview }) {
  const getBikeInformation = (text) => sanitizeHtml(text.replace(/\n/g, '<br />'));
  const getBikeSizes = (sizes) =>
    sizes
      .join(', ')
      .replace('xs', 'Sehr klein')
      .replace('sm', 'Klein')
      .replace('md', 'Mittel')
      .replace('lg', 'Groß')
      .replace('xl', 'Sehr groß');

  return (
    <li className="bg-white shadow overflow-hidden rounded-md p-3 lg:pr-6 lg:pl-4 lg:pt-4 lg:pb-3">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-5/12 relative">
          <ImageSlider
            preview={preview}
            images={[bike.image1, bike.image2, bike.image3, bike.image4, bike.image5]}
          />
        </div>
        <div className="w-full pt-6 px-2 lg:px-0 lg:pt-0 lg:w-7/12 flex flex-col lg:pl-4 justify-between">
          <h2 className="text-2xl font-bold">{bike.title}</h2>
          <p
            className="mt-2"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: getBikeInformation(bike.information),
            }}
          />
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mt-6 flex flex-row space-x-6">
              <div>
                <div className="text-xs text-gray-500">
                  <span>{texts.category}</span>
                </div>
                <div className="text-base font-medium text-gray-800">
                  <div className="">{bike.category}</div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">
                  <span>{texts.size}</span>
                </div>
                <div className="text-base font-medium text-gray-800">
                  <div className="">{getBikeSizes(bike.sizes)}</div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">
                  <span>{texts.price}</span>
                </div>
                <div className="text-base font-medium text-gray-800">
                  <div className="">
                    {bike.price.toString().replace('.', ',')}
                    <span> €</span>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/besichtigung/"
              className="mt-5 -mr-2 lg:mr-0 lg:mt-0 font-semibold cursor-pointer self-end text-gray-900"
            >
              {texts.visitButton}
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

Bike.defaultProps = {
  preview: false,
};

Bike.propTypes = {
  preview: PropTypes.bool,
  texts: PropTypes.shape({
    visitButton: PropTypes.string,
    category: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  bike: PropTypes.shape({
    category: PropTypes.string,
    price: PropTypes.number,
    sizes: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    information: PropTypes.string,
    id: PropTypes.string,
    image1: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: GatsbyImageData,
        id: PropTypes.string,
      }),
    }),
    image2: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: GatsbyImageData,
        id: PropTypes.string,
      }),
    }),
    image3: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: GatsbyImageData,
        id: PropTypes.string,
      }),
    }),
    image4: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: GatsbyImageData,
        id: PropTypes.string,
      }),
    }),
    image5: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: GatsbyImageData,
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Bike;
