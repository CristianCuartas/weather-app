import React from 'react';
import { render } from '@testing-library/react';
import Forecast from './Forecast';

const forecastItemList = [
  { hour: 18, state: 'clouds', temperature: 10, weekDay: 'Jueves' },
];

test('Forecast render', async () => {
  const { findAllByTestId } = render(
    <Forecast forecastItemList={forecastItemList} />
  );

  const forecastItems = await findAllByTestId('forecast-item-container');
  expect(forecastItems).toHaveLength(1);
});
