import React from 'react';
import { Link } from 'gatsby';
import Container from '../components/container';
import Seo from '../components/seo';

export default function Error() {
  return (
    <Container>
      <Seo title="404" description="404 Error" />
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="flex flex-col w-full max-w-sm">
          <h1 className="text-4xl text-gray-800 font-bold mb-3">404 Error</h1>
          <p className="mb-4 text-gray-900">
            Die angeforderte Seite wurde leider nicht gefunden. Bitte sagen Sie uns Bescheid falls
            der Fehler öfter auftritt.
          </p>
          <Link
            className="underline text-gray-800 hover:text-gray-900 transition ease-in-out duration-150"
            to="/"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </Container>
  );
}
