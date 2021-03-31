import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

function Page({ data }) {
  const page = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <Seo title={page.meta.title} description={page.meta.description} />
      <Navigation white />

      <div className="aspect-w-16 aspect-h-9 lg:aspect-h-6 bg-cover">
        <GatsbyImage
          image={page.header.image.childImageSharp.gatsbyImageData}
          alt="Hintergrundbild"
          style={{ position: 'absolute' }}
        />
      </div>

      <Content maxWidthClass="max-w-2xl">
        <div
          className="max-w-2xl prose"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Content>
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    markdownRemark(frontmatter: { slug: { eq: "data-protection" } }) {
      html
      frontmatter {
        header {
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
        meta {
          description
          title
        }
      }
    }
  }
`;
