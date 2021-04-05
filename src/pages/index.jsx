import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Section from '../components/Section';
import SectionWrapper from '../components/SectionWrapper';
import Navigation from '../components/Navigation';
import InnerSection from '../components/InnerSection';
import SectionHeading from '../components/SectionHeading';
import SectionPre from '../components/SectionPre';
import Button from '../components/Button';
import ButtonA from '../components/ButtonA';
import generateLineBreaks from '../utils/lineBreaks';

function Index({ data }) {
  const page = data.pagesYaml;
  const categories = data.allCategoriesYaml.nodes;
  const reviews = data.allReviewsYaml.nodes;

  useEffect(() => {
    // eslint-disable-next-line
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 ||  navigator.msMaxTouchPoints > 0) {
      // eslint-disable-next-line
      const element = document.querySelector('.lg\\:scroll-snap-type-y-mandatory')
      if (element) element.classList.remove('lg:scroll-snap-type-y-mandatory');
    }
  });

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
        keywords={page.meta.keywords}
      />
      <Navigation />
      <SectionWrapper>
        <Section>
          <div className="min-h-screen-80 flex-1 relative">
            <div className="absolute w-full h-full">
              <Img
                className="absolute w-full h-full"
                fluid={page.header.backgroundImage.childImageSharp.fluid}
              />
            </div>
            <GatsbyImage
              className="absolute w-full h-full flex justify-center items-center"
              image={page.header.logo.childImageSharp.gatsbyImageData}
              objectFit="none"
              objectPosition="50% 20%"
              alt={page.meta.title}
            />
          </div>
        </Section>
        <Section>
          <InnerSection wide position="bottom" backgroundImage={page.concept.backgroundImage}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-2">
                <SectionPre>{page.concept.pretitle}</SectionPre>
                <SectionHeading>{page.concept.title}</SectionHeading>
                <p className="prose prose-sm">{page.concept.textLeft}</p>
                <div className="hidden sm:block sm:mt-10">
                  <Button to="/fahrraeder/">{page.concept.button}</Button>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-4">
                {/* <div
                  className="prose prose-sm mb-12 sm:mb-0 max-w-full lg:column-count-2"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: getText(page.concept.text),
                  }}
                /> */}
                <div className="prose prose-sm mb-12 sm:mb-0 max-w-full lg:column-count-2">
                  {page.concept.prose.map((prose) => (
                    <React.Fragment key={prose.title}>
                      <h3>{prose.title}</h3>
                      <p>{prose.text}</p>
                    </React.Fragment>
                  ))}
                </div>
                <div className="sm:hidden">
                  <Button to="/fahrraeder/">{page.concept.button}</Button>
                </div>
              </div>
            </div>
          </InnerSection>
        </Section>
        <Section>
          <InnerSection position="left" backgroundImage={page.categories.backgroundImage}>
            <div className="grid grid-cols-3 gap-x-4">
              <div className="col-span-3">
                <SectionPre>{page.categories.pretitle}</SectionPre>
                <SectionHeading>{page.categories.title}</SectionHeading>
              </div>
              {categories.map((category) => (
                <div key={category.id} className="col-span-3 sm:col-span-1 lg:col-span-3 mb-16">
                  <Link to="/fahrraeder/" className="group">
                    <Img
                      className="mx-auto mb-6 w-3/4 group-hover:scale-110 transform transition duration-150"
                      fluid={category.image.childImageSharp.fluid}
                      alt={category.title}
                    />
                  </Link>
                  <p className="mb-0 md:mb-8 text-gray-800 leading-snug">{category.description}</p>
                </div>
              ))}
            </div>
          </InnerSection>
        </Section>
        <Section>
          <InnerSection wide position="bottom" backgroundImage={page.openingHours.backgroundImage}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-y-12">
              <div className="col-span-1">
                <SectionPre>{page.openingHours.pretitle}</SectionPre>
                <SectionHeading>{page.openingHours.title}</SectionHeading>
                <Button to="/besichtigung/">{page.openingHours.button}</Button>
              </div>
              <div className="col-span-1">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  {page.openingHours.titleLeft}
                </h3>
                <div className="prose prose-sm">
                  <p>{page.openingHours.textLeft}</p>
                </div>
              </div>
              <div className="col-span-1">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  {page.openingHours.titleCenter}
                </h3>
                <div className="prose prose-sm">
                  <p>{page.openingHours.textCenter}</p>
                </div>
              </div>
              <div className="col-span-1">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  {page.openingHours.titleRight}
                </h3>
                <div className="prose prose-sm">
                  <p>{page.openingHours.textRight}</p>
                </div>
              </div>
            </div>
          </InnerSection>
        </Section>
        <Section hidden={page.reviews.hidden}>
          <InnerSection position="left" backgroundImage={page.reviews.backgroundImage}>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-y-8 gap-x-6 md:gap-0">
              <div className="col-span-1">
                <SectionPre>{page.reviews.pretitle}</SectionPre>
                <SectionHeading>{page.reviews.title}</SectionHeading>
              </div>
              {reviews.map((review) => (
                <div key={review.id} className="col-span-1 md:mb-16 last:mb-0">
                  <div className="prose prose-sm mb-2">
                    <p>{review.review}</p>
                  </div>
                  <div className="ml-2 text-sm font-bold tracking-wide text-gray-800">
                    {review.customer}
                  </div>
                </div>
              ))}
            </div>
          </InnerSection>
        </Section>
        <Section>
          <InnerSection position="bottom" backgroundImage={page.contact.backgroundImage}>
            <div className="grid gap-6 md:gap-0 md:grid-cols-3">
              <div className="col-span-1">
                <SectionPre>{page.contact.pretitle}</SectionPre>
                <SectionHeading>{page.contact.title}</SectionHeading>

                <div className="flex space-x-2">
                  <ButtonA link={page.contact.facebook}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      className="w-6 h-6"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </ButtonA>
                  <ButtonA link={page.contact.instagram}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram"
                      className="w-6 h-6"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </ButtonA>
                </div>
              </div>
              <div className="col-span-1">
                <h3 className="text-lg font-medium text-gray-700 mb-2">{page.contact.titleLeft}</h3>
                <div className="prose prose-sm">
                  <p
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: generateLineBreaks(page.contact.textLeft) }}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  {page.contact.titleRight}
                </h3>
                <div className="prose prose-sm">
                  <p
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: generateLineBreaks(page.contact.textRight) }}
                  />
                </div>
              </div>
            </div>
          </InnerSection>
        </Section>
      </SectionWrapper>
    </Layout>
  );
}

Index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  {
    pagesYaml(slug: { eq: "home" }) {
      meta {
        image {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
        description
        title
        keywords
      }
      header {
        logo {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 4000) {
              srcSet
              src
              sizes
              base64
              aspectRatio
            }
          }
        }
      }
      concept {
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 4000) {
              srcSet
              src
              sizes
              base64
              aspectRatio
            }
          }
        }
        pretitle
        title
        textLeft
        prose {
          text
          title
        }
        button
      }
      categories {
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 4000) {
              srcSet
              src
              sizes
              base64
              aspectRatio
            }
          }
        }
        pretitle
        title
      }
      openingHours {
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 4000) {
              srcSet
              src
              sizes
              base64
              aspectRatio
            }
          }
        }
        pretitle
        title
        titleLeft
        textLeft
        titleCenter
        textCenter
        titleRight
        textRight
        button
      }
      reviews {
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 4000) {
              srcSet
              src
              sizes
              base64
              aspectRatio
            }
          }
        }
        pretitle
        title
        hidden
      }
      contact {
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 4000) {
              srcSet
              src
              sizes
              base64
              aspectRatio
            }
          }
        }
        pretitle
        title
        titleLeft
        textLeft
        titleRight
        textRight
        facebook
        instagram
      }
    }
    allCategoriesYaml(sort: { fields: order }) {
      nodes {
        id
        title
        image {
          childImageSharp {
            fluid(maxWidth: 400) {
              src
              sizes
              base64
              aspectRatio
              srcSet
              tracedSVG
            }
          }
        }
        order
        description
      }
    }
    allReviewsYaml {
      nodes {
        id
        review
        customer
      }
    }
  }
`;
