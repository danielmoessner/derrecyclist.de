import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Navigation from '../components/Navigation';
import Container from '../components/Container';
import Bike from '../components/Bike';

function Bikes({ data }) {
  const allBikes = data.allBikesYaml.nodes;
  const page = data.pagesYaml;
  const categories = data.allCategoriesYaml.nodes;
  const [activeCategory, setActiveCategory] = useState('--');
  const [activeSize, setActiveSize] = useState('--');

  const filteredBikes = () => {
    let bikes = allBikes;
    if (activeSize !== '--') bikes = bikes.filter((bike) => bike.sizes.includes(activeSize));
    if (activeCategory !== '--') bikes = bikes.filter((bike) => bike.category === activeCategory);
    return bikes;
  };

  const updateCategory = (newCategory) => {
    if (activeCategory === newCategory) {
      setActiveCategory('--');
    } else {
      setActiveCategory(newCategory);
    }
  };

  const updateActiveSize = (newSize) => {
    const size = Number(newSize);
    if (size >= 155 && size <= 165) {
      setActiveSize('xs');
    } else if (size >= 165 && size <= 175) {
      setActiveSize('sm');
    } else if (size >= 175 && size <= 185) {
      setActiveSize('md');
    } else if (size >= 185 && size <= 190) {
      setActiveSize('lg');
    } else if (size >= 190 && size <= 205) {
      setActiveSize('xl');
    } else if (newSize === '') {
      setActiveSize('--');
    } else {
      setActiveSize('-/-');
    }
  };

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Navigation white />

      <div className="aspect-w-16 aspect-h-9 lg:aspect-h-6 bg-cover">
        <GatsbyImage
          image={page.header.image.childImageSharp.gatsbyImageData}
          alt="Hintergrundbild"
          style={{ position: 'absolute' }}
        />
      </div>

      <div className="relative z-0 -mt-24">
        <div className="absolute flex flex-col inset-0">
          <div className="h-24" />
          <div className="flex-1 bg-gray-200 w-full" />
        </div>
        <Container>
          <div className="px-4 py-3 lg:pt-12 lg:pb-6 bg-gray-100 rounded shadow lg:px-10 relative z-30">
            <div className="lg:flex lg:justify-between">
              <div className="max-w-xl">
                <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
                  {page.form.heading}
                </h1>
                <p className="mt-5 text-base lg:text-lg text-gray-500">{page.form.headingText}</p>
              </div>
              <div className="w-full max-w-xs mt-6">
                <label htmlFor="size" className="block text-base text-gray-500">
                  {page.form.inputLabel}
                  <div className="mt-1.5 relative">
                    <input
                      onChange={(event) => updateActiveSize(event.target.value)}
                      id="size"
                      name="size"
                      defaultValue="--"
                      type="number"
                      placeholder={page.form.inputPlaceholder}
                      min="155"
                      max="205"
                      className="shadow-sm appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm" id="size-unit">
                        cm
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500" id="email-description">
                    {page.form.inputHelptext}
                  </p>
                </label>
              </div>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3">
                  <div className="max-w-xl">
                    <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
                      {page.form.categoryHeading}
                    </h2>
                    <p className="mt-3 text-base lg:text-lg text-gray-500">
                      {page.form.categoryText}
                    </p>
                  </div>
                </div>
                {categories.map((category) => (
                  <div key={category.id} className="col-span-3 sm:col-span-1 group">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => updateCategory(category.title)}
                        type="button"
                        className="group focus:outline-none"
                      >
                        <GatsbyImage
                          className={`scale-75 transform transition duration-150 ${
                            activeCategory === category.title
                              ? 'scale-95 group-hover:scale-100'
                              : 'group-hover:scale-90'
                          }`}
                          objectPosition="50% 50%"
                          image={category.image.childImageSharp.gatsbyImageData}
                          alt={category.title}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gray-200" style={{ minHeight: '50vh' }}>
        <Container>
          <div className="px-0 pt-16 pb-32 lg:px-8">
            {filteredBikes().length === 0 ? <p>{page.bikes.noBikesText}</p> : ''}
            <ul className="space-y-3">
              {filteredBikes().map((bike) => (
                <Bike key={bike.id} bike={bike} texts={page.bikes} />
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </Layout>
  );
}

Bikes.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Bikes;

export const query = graphql`
  {
    allBikesYaml {
      nodes {
        category
        price
        slug
        sizes
        title
        information
        id
        image1 {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            id
          }
        }
        image2 {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            id
          }
        }
        image3 {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            id
          }
        }
        image4 {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            id
          }
        }
        image5 {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            id
          }
        }
      }
    }
    allCategoriesYaml {
      nodes {
        id
        title
        slug
        description
        image {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
    pagesYaml(slug: { eq: "bikes" }) {
      meta {
        description
        title
        image {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
      }
      header {
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 70, placeholder: BLURRED)
          }
        }
      }
      form {
        categoryHeading
        categoryText
        headingText
        inputHelptext
        inputLabel
        inputPlaceholder
        heading
      }
      bikes {
        visitButton
        shippingButton
        noBikesText
        size
        category
        price
      }
    }
  }
`;
