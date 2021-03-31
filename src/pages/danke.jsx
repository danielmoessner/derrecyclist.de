import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Navigation from '../components/Navigation';
import Layout from '../components/layout';
import Content from '../components/Content';
import Seo from '../components/seo';

function Page({ data }) {
  const page = data.pagesYaml;

  return (
    <Layout>
      <Seo title="Danke" description="" />
      <Navigation white />
      <div className="aspect-w-16 aspect-h-9 lg:aspect-h-6 bg-cover">
        <GatsbyImage
          image={page.header.image.childImageSharp.gatsbyImageData}
          alt="Hintergrundbild"
          style={{ position: 'absolute' }}
        />
      </div>

      <Content maxWidthClass="max-w-xl">
        <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
          {page.content.heading}
        </h1>
        <p className="mt-5 text-base lg:text-lg text-gray-500">{page.content.text}</p>
      </Content>
    </Layout>
  );
}

Page.defaultProps = {};

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  query {
    pagesYaml(slug: { eq: "thanks" }) {
      header {
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 70, placeholder: BLURRED)
          }
        }
      }
      content {
        heading
        text
      }
    }
  }
`;
