import React from 'react';
import CityList from './CityList';
import { action } from '@storybook/addon-actions';

export default {
  title: 'CityList',
  component: CityList,
};

const cities = [
  { city: 'Bogotá', country: 'Colombia' },
  { city: 'Buenos Aires', country: 'Argentina' },
];

export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action('Click en city')} />
);
