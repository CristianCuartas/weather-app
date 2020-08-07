import React from 'react';
import { render } from '@testing-library/react';
import Forecast from './Forecast';

test('Forecast render', async () => {
  const forecastItemList = [
    { hour: 18, state: 'cloud', temperature: 10, weekDay: 'Jueves' },
  ];
  const { findByTestId } = render(
    <Forecast forecastItemList={forecastItemList} />
  );

  const forecastItems = await findByTestId('forecast-item-container');
  expect(forecastItems).toHaveLength(1);
});
