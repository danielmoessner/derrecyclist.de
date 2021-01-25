import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Seo from '../components/seo';
import ImageFluid from '../types/ImageFluid';

function AnimalTemplate({ title, image, category, excerpt, body, preview }) {
  return (
    <div>
      {!preview ? <Seo title={title} description={excerpt} image={image.src} /> : null}
      <div className="mb-6">
        <Hero image={image} preview={preview} alt={title} />
      </div>
      <div className="max-w-xl w-full mx-auto mb-3">
        <div className="text-gray-600 uppercase font-medium leading-tight tracking-tight -mb-2">
          {category}
        </div>
        <h2 className="text-5xl font-bold text-gray-800 tracking-tight leading-tight">{title}</h2>
      </div>
      <div className="max-w-xl w-full mx-auto mb-40">
        {!preview ? (
          <article
            className="prose-sm sm:prose lg:prose-xl"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: body }}
          />
        ) : (
          <article className="sm:prose lg:prose-xl prose-sm">{body}</article>
        )}
      </div>
    </div>
  );
}

AnimalTemplate.defaultProps = {
  preview: false,
};

AnimalTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: ImageFluid.isRequired,
  preview: PropTypes.bool,
};

function Animal({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const image = data.markdownRemark.frontmatter.image.childImageSharp.fluid;

  return (
    <Layout>
      <AnimalTemplate
        title={frontmatter.title}
        category={frontmatter.category}
        excerpt={frontmatter.excerpt}
        body={html}
        image={image}
      />
    </Layout>
  );
}

Animal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export { AnimalTemplate };
export default Animal;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        category
        excerpt
        slug
        title
        image {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              src
              sizes
              srcSet
            }
          }
        }
      }
    }
  }
`;
