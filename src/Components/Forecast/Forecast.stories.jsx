import React from 'react';
import Forecast from './Forecast';

export default {
  title: 'Forecast',
  component: Forecast,
};
const forecastItemList = [
  { hour: 18, state: 'cloud', temperature: 10, weekDay: 'Jueves' },
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
);
