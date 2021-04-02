import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { openPopupWidget } from 'react-calendly';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

function Page({ data }) {
  const page = data.pagesYaml;
  const onClick = () => openPopupWidget({ url: 'https://calendly.com/derrecyclist/60min' });

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
        keywords={page.meta.keywords}
      />
      <Navigation white />

      <div className="aspect-w-16 aspect-h-9 lg:aspect-h-6 bg-cover">
        <GatsbyImage
          image={page.header.image.childImageSharp.gatsbyImageData}
          alt="Hintergrundbild"
          style={{ position: 'absolute' }}
        />
      </div>

      <Content>
        <div className="lg:flex lg:justify-between lg:items-start">
          <div className="max-w-xl">
            <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
              {page.form.heading}
            </h1>
            <p className="mt-5 text-base lg:text-lg text-gray-500">{page.form.text}</p>
          </div>
          <button
            type="button"
            onClick={onClick}
            className="rounded mt-10 border-2 border-gray-800 px-2.5 py-1.5 text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300 ease"
          >
            {page.form.button}
          </button>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3">
              <div className="max-w-xl">
                <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
                  {page.form.subheading}
                </h2>
                <p className="mt-3 text-base lg:text-lg text-gray-500">{page.form.subtext}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <iframe
              className="w-full rounded overflow-hidden focus:outline-none"
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10645.679654145493!2d11.5815093!3d48.1599877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac577e05b2c26096!2sDer%20ReCyclist!5e0!3m2!1sde!2sde!4v1617393729868!5m2!1sde!2sde"
              height="450"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
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
    pagesYaml(slug: { eq: "visit" }) {
      meta {
        description
        title
        keywords
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
        heading
        text
        button
        subheading
        subtext
      }
    }
  }
`;
