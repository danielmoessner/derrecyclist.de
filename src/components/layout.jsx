import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Container from './container';

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      settingsYaml {
        navigationTitle
      }
    }
  `).settingsYaml;

  return (
    <div>
      <Container>
        <header className="pb-3 pt-5">
          <div className="flex justify-between">
            <Link to="/">
              <h1 className="text-3xl font-bold tracking-tight leading-tight text-gray-700 hover:text-gray-800 transition ease-in-out duration-150">
                {data.navigationTitle}
              </h1>
            </Link>
          </div>
        </header>
      </Container>
      <Container>
        <main className="pt-5">{children}</main>
      </Container>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
