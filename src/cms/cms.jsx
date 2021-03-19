/* eslint-disable react/prop-types, react/jsx-props-no-spreading */

import CMS from 'netlify-cms-app';
import { de } from 'netlify-cms-locales';
import React from 'react';
import Bike from '../components/Bike';
import '../styles/global.css';

CMS.registerPreviewStyle('../styles/global.css');

// Localization
CMS.registerLocale('de', de);

// Previews
const texts = {
  category: 'Text',
  price: 'Text',
  visitButton: 'Button',
  size: 'Text',
};
const BikePreview = ({ entry, widgetFor }) => {
  const bike = entry.toJS().data;
  bike.image1 = widgetFor('image1');
  bike.image2 = widgetFor('image2');
  bike.image3 = widgetFor('image3');
  bike.image4 = widgetFor('image4');
  bike.image5 = widgetFor('image5');
  return (
    <div className="p-10">
      <ul>
        <Bike texts={texts} bike={bike} preview />
      </ul>
    </div>
  );
};

CMS.registerPreviewTemplate('bike', BikePreview);
