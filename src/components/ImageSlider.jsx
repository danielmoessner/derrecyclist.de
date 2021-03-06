import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Transition } from '@headlessui/react';
import ImageFluid from '../types/ImageFluid';

function ImageSlider({ images }) {
  const [activeSlide, setActiveSlide] = useState(1);
  const slideNumbersArray = Array.from(Array(images.length).keys());

  return (
    <div className="relative">
      {images.map((image, index) => (
        <Transition
          className="absolute inset-0"
          key={image.childImageSharp.fluid.src}
          show={activeSlide === index}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="aspect-w-4 aspect-h-3">
            <Img
              className="rounded"
              style={{ position: 'absolute' }}
              fluid={image.childImageSharp.fluid}
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
  images: PropTypes.arrayOf(ImageFluid).isRequired,
};

export default ImageSlider;
