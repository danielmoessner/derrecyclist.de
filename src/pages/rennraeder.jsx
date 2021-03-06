import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Navigation from '../components/Navigation';
import Container from '../components/Container';
import ImageSlider from '../components/ImageSlider';

function Bikes({ data }) {
  const allBikes = data.allBikesYaml.nodes;
  const [bikes, setBikes] = useState(allBikes);
  const page = data.pagesYaml;

  const getBikeInformation = (text) => {
    const clean = DOMPurify.sanitize(text);
    return clean.replaceAll('\n', '<br>');
  };

  const changeSize = (newSize) => {
    if (newSize === '--') {
      setBikes(allBikes);
    } else {
      setBikes(allBikes.filter((bike) => bike.size === newSize));
    }
  };

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Navigation />

      <div
        className="pt-96 pb-96 bg-cover"
        style={{
          backgroundImage:
            'url(https://www.radon-bikes.de/fileadmin/_processed_/csm_499430_f0b28bc0b2.jpg)',
        }}
      />

      <div className="relative z-0 -mt-24">
        <div className="absolute flex flex-col inset-0">
          <div className="h-24" />
          <div className="flex-1 bg-gray-200 w-full" />
        </div>
        <Container>
          <div className="py-12 bg-gray-100 rounded shadow px-10 relative z-30">
            <div className="lg:flex lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
                  Unsere Rennräder
                </h2>
                <p className="mt-5 text-base lg:text-lg text-gray-500">
                  Wähle ganz einfach deine entsprechende Körpergröße aus und reserviere Dir ein
                  Fahrrad zum Besichtigen.
                </p>
              </div>
              <div className="mt-10 w-full max-w-xs">
                <label htmlFor="size" className="block text-base text-gray-500">
                  Körpergröße
                  <div className="mt-1.5 relative">
                    <select
                      onChange={(event) => changeSize(event.target.value)}
                      id="size"
                      name="size"
                      defaultValue="--"
                      className="shadow-sm appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                    >
                      <option value="--">------</option>
                      <option value="xs">155cm - 165cm</option>
                      <option value="sm">165cm - 175cm</option>
                      <option value="md">175cm - 185cm</option>
                      <option value="lg">185cm - 190cm</option>
                      <option value="xl">190cm - 200cm</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gray-200" style={{ minHeight: '50vh' }}>
        <Container>
          <div className="pt-16 pb-32 px-8">
            {bikes.length === 0 ? <p>Leider keine Fahrräder für diese Größe auf Lager.</p> : ''}
            <ul className="space-y-3">
              {bikes.map((bike) => (
                <li
                  className="bg-white shadow overflow-hidden rounded-md pr-6 pl-4 py-4"
                  key={bike.id}
                >
                  <div className="flex flex-row">
                    <div className="w-5/12 relative">
                      <ImageSlider
                        images={[bike.image1, bike.image2, bike.image3, bike.image4, bike.image5]}
                      />
                    </div>
                    <div className="w-7/12 flex flex-col pl-4 justify-between">
                      <div>
                        <h2 className="text-2xl font-bold">{bike.title}</h2>
                        <p
                          className="mt-2"
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{ __html: getBikeInformation(bike.information) }}
                        />
                      </div>
                      <div className="flex flex-row justify-between">
                        <div className="mt-6 flex flex-row space-x-6">
                          <div>
                            <div className="text-xs text-gray-500">
                              <span>Kategorie</span>
                            </div>
                            <div className="text-base font-medium text-gray-800">
                              <div className="">{bike.category}</div>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">
                              <span>Größe</span>
                            </div>
                            <div className="text-base font-medium text-gray-800">
                              <div className="">Mittel</div>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">
                              <span>Preis</span>
                            </div>
                            <div className="text-base font-medium text-gray-800">
                              <div className="">
                                {bike.price.toString().replace('.', ',')}
                                <span> €</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="font-semibold cursor-pointer self-end text-gray-900">
                          Besichtigung buchen
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
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
        size
        slug
        title
        information
        id
        image1 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image4 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image5 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
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
    }
  }
`;
