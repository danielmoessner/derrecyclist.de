import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Animal from '../components/animal';
import Seo from '../components/seo';

function Index({ data }) {
  const homePage = data.pagesYaml;
  const animals = data.allMarkdownRemark.edges.map((node) => node.node);

  return (
    <Layout>
      <>
        <Seo
          title={homePage.meta.title}
          description={homePage.meta.description}
          image={homePage.meta.image.childImageSharp.resize.src}
        />
        <div className="">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-6">
            {animals.map((animal) => (
              <Animal
                key={animal.id}
                slug={animal.frontmatter.slug}
                excerpt={animal.frontmatter.excerpt}
                category={animal.frontmatter.category}
                title={animal.frontmatter.title}
                image={animal.frontmatter.image.childImageSharp.fluid}
              />
            ))}
          </div>
        </div>
      </>
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
    allMarkdownRemark(filter: { frontmatter: { collection: { eq: "animal" } } }) {
      edges {
        node {
          frontmatter {
            slug
            excerpt
            category
            title
            image {
              childImageSharp {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
          id
        }
      }
    }
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
    }
  }
`;
