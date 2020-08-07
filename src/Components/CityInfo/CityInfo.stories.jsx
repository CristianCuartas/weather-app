import React from 'react';
import 'typeface-roboto';
import CityInfo from './CityInfo';

export default {
  title: 'CityInfo',
  component: CityInfo,
};

export const CityExample = () => (
  <CityInfo city={'Bogotá'} country={'Colombia'}></CityInfo>
);
