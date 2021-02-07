import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Section from '../components/Section';
import SectionWrapper from '../components/SectionWrapper';
import Navigation from '../components/Navigation';
import Container from '../components/Container';

function Index({ data }) {
  const homePage = data.pagesYaml;

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
          <div className="flex-1">
            <div className="h-4/5 bg-green-600" />
            <div className="h-1/5">
              <Container>
                <div className="py-12">
                  <div className="grid grid-cols-5">
                    <div className="col-span-2">
                      <div className="uppercase font-light text-sm text-gray-700">Konzept</div>
                      <h2 className="text-2xl font-medium mb-4 text-gray-800">
                        Gebrauchte Rennräder Neu
                      </h2>
                      <Link
                        to="/"
                        className="rounded border-2 border-gray-800 px-2.5 py-1.5 text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300 ease"
                      >
                        Fahrräder ansehen
                      </Link>
                    </div>
                    <div className="col-span-3">
                      <div className="prose prose-sm">
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
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </Section>
        <Section>
          <div className="flex-1 flex flex-row">
            <div className="w-1/5 flex">
              <div className="pl-10 pr-12">
                <div className="pt-12 pb-24 h-full flex flex-col justify-between">
                  <div className="">
                    <div className="uppercase font-light text-sm text-gray-700">
                      Produktkategorien
                    </div>
                    <h2 className="text-2xl font-medium mb-4 text-gray-800 leading-tight">
                      Unsere 3 Kollektionen
                    </h2>
                    <div className="prose prose-sm">
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
                  </div>
                  <div className="">
                    <Link
                      to="/"
                      className="rounded border-2 border-gray-800 px-2.5 py-1.5 text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300 ease"
                    >
                      Fahrräder ansehen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/5 bg-green-600" />
          </div>
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
  }
`;
