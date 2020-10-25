import React from 'react';
import Forecast from './Forecast';

export default {
  title: 'Forecast',
  component: Forecast,
};
const forecastItemList = [
  { hour: 7, state: 'cloud', temperature: 10, weekDay: 'Lunes' },
  { hour: 9, state: 'rain', temperature: 10, weekDay: 'Martes' },
  { hour: 12, state: 'clear', temperature: 10, weekDay: 'Miercoles' },
  { hour: 15, state: 'drizzle', temperature: 10, weekDay: 'Jueves' },
  { hour: 18, state: 'cloudy', temperature: 10, weekDay: 'Viernes' },
  { hour: 21, state: 'rain', temperature: 10, weekDay: 'Sábado' },
  { hour: 0, state: 'thunderstorm', temperature: 10, weekDay: 'Domingo' },
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
);
