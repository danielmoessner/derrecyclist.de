import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Section from '../components/Section';
import SectionWrapper from '../components/SectionWrapper';
import Navigation from '../components/Navigation';

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
          <div className="bg-blue-100 flex-1" />
        </Section>
        <Section>
          <div className="flex-1" />
        </Section>
        <Section>
          <div />
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
    }
  }
`;
