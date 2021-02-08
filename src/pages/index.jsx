import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Section from '../components/Section';
import SectionWrapper from '../components/SectionWrapper';
import Navigation from '../components/Navigation';
import InnerSection from '../components/InnerSection';
import SectionHeading from '../components/SectionHeading';
import SectionPre from '../components/SectionPre';
import Button from '../components/Button';

function Index({ data }) {
  const homePage = data.pagesYaml;
  const categories = data.allCategoriesYaml.nodes;
  const reviews = data.allReviewsYaml.nodes;

  return (
    <Layout>
      <Seo
        title={homePage.meta.title}
        description={homePage.meta.description}
        image={homePage.meta.image.childImageSharp.resize.src}
      />
      <Navigation />
      <SectionWrapper>
        <Section>
          <div className="bg-blue-100 flex-1">
            <div className="w-full h-full flex justify-center items-center">
              <Img className="w-48" fluid={homePage.logo.childImageSharp.fluid} />
            </div>
          </div>
        </Section>
        <Section>
          <InnerSection position="bottom">
            <div className="grid grid-cols-5">
              <div className="col-span-5 sm:col-span-2 gap-4">
                <SectionPre>Konzept</SectionPre>
                <SectionHeading>Gebrauchte Rennräder Neu</SectionHeading>
                <div className="hidden sm:inline">
                  <Button>Fahrräder ansehen</Button>
                </div>
              </div>
              <div className="col-span-5 sm:col-span-3">
                <div className="prose prose-sm mb-12 sm:mb-0">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae sed
                    veniam aut explicabo optio, esse suscipit facere doloribus, enim tenetur,
                    asperiores amet culpa hic rem molestiae cum nam facilis?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat
                    blanditiis veniam perferendis vero voluptatem a.
                  </p>
                </div>
                <div className="sm:hidden">
                  <Button>Fahrräder ansehen</Button>
                </div>
              </div>
            </div>
          </InnerSection>
        </Section>
        <Section>
          <InnerSection position="left">
            <div className="grid grid-cols-3 gap-x-4">
              <div className="col-span-3">
                <SectionPre>Produktkategorien</SectionPre>
                <SectionHeading>Unsere 3 Kollektionen</SectionHeading>
              </div>
              {categories.map((category) => (
                <div className="col-span-3 sm:col-span-1 md:col-span-3 mb-16">
                  <Link to="/" className="group">
                    <Img
                      className="mx-auto mb-6 w-1/2 group-hover:scale-125 transform transition duration-150"
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
          <InnerSection position="bottom">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-12">
              <div className="col-span-1">
                <SectionPre>Öffnungszeiten</SectionPre>
                <SectionHeading>Wir freuen uns auf Ihren Besuch</SectionHeading>
                <Button>Besichtigungstermin buchen</Button>
              </div>
              <div className="col-span-1">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Besichtigungstermin</h3>
                <div className="prose prose-sm">
                  <p>
                    Aktuell können Sie bei uns Besichtungstermine nach Ihren Wünschen Buchen. Tragen
                    Sie sich dafür einfach in unserem Kalender ein.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Tag der offenen Tür</h3>
                <div className="prose prose-sm">
                  <p>
                    Immer am ersten Sonntag im Monat ist bei uns Tag der offenen Tür. Dabei können
                    Sie einfach bei uns vorbeischauen und jedes unserer Fahrräder Probe fahren.
                  </p>
                </div>
              </div>
            </div>
          </InnerSection>
        </Section>
        <Section>
          <InnerSection position="left">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-y-8 gap-x-6 md:gap-0">
              <div className="col-span-1">
                <SectionPre>Kundenrezensionen</SectionPre>
                <SectionHeading>Was sagen unsere Kunden?</SectionHeading>
              </div>
              {reviews.map((review) => (
                <div className="col-span-1 md:mb-16 last:mb-0">
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
          <InnerSection position="bottom">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <SectionPre>Kontakt &amp; Standort</SectionPre>
                <SectionHeading>Hier finden Sie uns</SectionHeading>
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
      }
      logo {
        childImageSharp {
          fluid(maxWidth: 400) {
            srcSet
            src
            sizes
            base64
            aspectRatio
          }
        }
      }
    }
    allCategoriesYaml(sort: { fields: order }) {
      nodes {
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
        review
        customer
      }
    }
  }
`;
