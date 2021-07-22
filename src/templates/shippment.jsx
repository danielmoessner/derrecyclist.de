import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Navigation from '../components/Navigation';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Content from '../components/Content';

function Page({ data }) {
  const bike = data.bikesYaml;
  const page = data.pagesYaml;
  const [enabled, setEnabled] = useState(false);

  return (
    <Layout>
      <Seo
        title={`${page.meta.title} - ${bike.title}`}
        description={page.meta.description}
        image={bike.image1.childImageSharp.resize.src}
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

      <Content maxWidthClass="max-w-xl">
        <div className="lg:flex lg:justify-between lg:items-start">
          <div className="max-w-xl">
            <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
              {page.form.heading}
            </h1>
            <p className="mt-5 text-base lg:text-lg text-gray-500">{page.form.text}</p>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3">
              <div className="max-w-lg">
                <h2 className="text-xl font-extrabold text-gray-900 mb-6 sm:text-2xl sm:tracking-tight lg:text-3xl">
                  {page.form.formHeading}
                </h2>
                <form action="/danke/" method="POST" data-netlify="true" name="versandanfrage">
                  <input type="hidden" name="form-name" value="versandanfrage" />
                  <div className="">
                    <div className="">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-6">
                          <label htmlFor="bike" className="block text-sm font-medium text-gray-700">
                            Fahrrad
                            <input
                              type="text"
                              name="bike"
                              id="bike"
                              defaultValue={bike.title}
                              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </label>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Vorname
                            <input
                              type="text"
                              required
                              name="first_name"
                              id="first_name"
                              autoComplete="given-name"
                              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </label>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nachname
                            <input
                              type="text"
                              required
                              name="last_name"
                              id="last_name"
                              autoComplete="family-name"
                              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </label>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="email_address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            E-Mail (optional)
                            <input
                              type="text"
                              name="email_address"
                              id="email_address"
                              autoComplete="email"
                              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </label>
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Telefonnummer
                            <input
                              type="text"
                              name="phone"
                              required
                              id="phone"
                              autoComplete="tel"
                              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </label>
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="street_address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Straße &amp; Hausnummer
                            <input
                              type="text"
                              required
                              name="street_address"
                              id="street_address"
                              autoComplete="street-address"
                              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </label>
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                          <label
                            htmlFor="postal_code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            PLZ
                            <input
                              type="text"
                              required
                              name="postal_code"
                              id="postal_code"
                              autoComplete="postal-code"
                              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </label>
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            Stadt
                            <input
                              required
                              type="text"
                              name="city"
                              id="city"
                              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </label>
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => setEnabled(!enabled)}
                              className={`bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                                enabled ? 'bg-gray-600' : 'bg-gray-200'
                              }`}
                              aria-pressed="false"
                              aria-labelledby="datenschutz-label"
                            >
                              <input
                                type="checkbox"
                                className="sr-only transform translate-x-3 translate-y-2"
                                checked={enabled}
                                required
                              />
                              <span className="sr-only">Datenschutz</span>
                              <span
                                aria-hidden="true"
                                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                                  enabled ? 'translate-x-5' : 'translate-x-0'
                                }`}
                              />
                            </button>
                            <span className="ml-3" id="datenschutz-label">
                              <span className="text-sm font-medium text-gray-700">
                                Ich stimme zu, dass meine Daten kurzzeitig zum Beantworten der
                                Anfrage gespeichert werden.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right mt-6">
                      <Link to="/danke/" className="hidden" />
                      <button
                        type="submit"
                        className="rounded border-2 border-gray-800 px-2.5 py-1.5 text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300 ease"
                      >
                        {page.form.button}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

Page.defaultProps = {};

Page.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  // data: PropTypes.shape({
  //   bikesYaml: PropTypes.shape({
  //     title: PropTypes.string,
  //     slug: PropTypes.string,
  //     information: PropTypes.string,
  //     image1: PropTypes.shape({
  //       childImageSharp: PropTypes.shape({
  //         resize: PropTypes.shape({
  //           src: PropTypes.string,
  //         }),
  //       }),
  //     }),
  //   }),
  //   // eslint-disable-next-line react/forbid-prop-types
  //   pagesYaml: PropTypes.object,
  // }).isRequired,
};

export default Page;

export const query = graphql`
  query($slug: String!) {
    bikesYaml(slug: { eq: $slug }) {
      title
      slug
      information
      image1 {
        childImageSharp {
          resize(width: 1200) {
            src
          }
        }
      }
    }
    pagesYaml(slug: { eq: "shippment" }) {
      meta {
        description
        title
        keywords
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
        formHeading
        button
      }
    }
  }
`;
