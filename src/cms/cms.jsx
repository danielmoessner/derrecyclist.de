/* eslint-disable react/prop-types, react/jsx-props-no-spreading */

import CMS from 'netlify-cms-app';
import { de } from 'netlify-cms-locales';
import React from 'react';
import { AnimalTemplate } from '../templates/animal';
import AnimalCard from '../components/animal';
import Container from '../components/container';

// Localization
CMS.registerLocale('de', de);

// Previews
const AnimalPreview = ({ entry, widgetFor }) => (
  <Container>
    <div className="pb-32 pt-5">
      <AnimalTemplate
        {...entry.toJS().data}
        preview
        image={widgetFor('image')}
        body={widgetFor('body')}
      />
      <hr className="bg-gray-600 my-10" />
      <div className="max-w-xs">
        <AnimalCard preview {...entry.toJS().data} image={widgetFor('image')} />
      </div>
    </div>
  </Container>
);

CMS.registerPreviewTemplate('animal', AnimalPreview);
