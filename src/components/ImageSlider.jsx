import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Transition } from '@headlessui/react';
import GatsbyImageData from '../types/GatsbyImageData';

function ImageSlider({ images }) {
  const [activeSlide, setActiveSlide] = useState(1);
  const [imageOpen, setImageOpen] = useState(false);
  const slideNumbersArray = Array.from(Array(images.length).keys());

  return (
    <div className="relative">
      <Transition
        show={imageOpen}
        className="fixed inset-0 p-10 bg-gray-800 bg-opacity-70 z-40 rounded"
      >
        <div className="aspect-w-16 aspect-h-9 lg:aspect-none bg-gray-50 bg-opacity-50 relative rounded lg:relative h-full w-full">
          <div>
            <button
              onClick={() => setImageOpen(false)}
              type="button"
              className="z-10 absolute text-gray-100 top-0 right-0 w-12 h-12 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-800 hover:text-white"
            >
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {images.map((image, index) => (
              <GatsbyImage
                key={image.childImageSharp.id}
                className="rounded w-full h-full"
                style={{ position: 'absolute', display: `${index !== activeSlide ? 'none' : ''}` }}
                alt={`Slider Bild ${index}`}
                image={image.childImageSharp.gatsbyImageData}
              />
            ))}
          </div>
        </div>
      </Transition>
      {images.map((image, index) => (
        <Transition
          className="absolute inset-0"
          key={image.childImageSharp.gatsbyImageData.images.fallback.src}
          show={activeSlide === index}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="aspect-w-4 aspect-h-3">
            <GatsbyImage
              onClick={() => setImageOpen(true)}
              className="rounded cursor-pointer z-10"
              style={{ position: 'absolute' }}
              alt={`Slider Bild ${index}`}
              image={image.childImageSharp.gatsbyImageData}
            />
          </div>
        </Transition>
      ))}
      <div className="aspect-w-4 aspect-h-3" />
      <div className="relative mt-1 -mb-1 flex flex-row items-center justify-center space-x-1">
        {slideNumbersArray.map((number) => (
          <div className="" key={number}>
            <button
              className="p-1 focus:outline-none"
              type="button"
              onClick={() => setActiveSlide(number)}
            >
              <div
                className={`w-4 h-4 bg-gray-300 rounded-full 
                ${activeSlide === number ? 'bg-gray-400' : ''}`}
              >
                <span className="sr-only leading-4">
                  Slide
                  {number}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: GatsbyImageData.isRequired,
        id: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default ImageSlider;
