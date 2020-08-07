import React from 'react';
import { render } from '@testing-library/react';
import ForecastItem from './ForecastItem';

test('ForecastItem render', async () => {
  const { findByText } = render(
    <ForecastItem
      weekDay={'Lunes'}
      hour={15}
      temperature={20}
      state={'sunny'}
    />
  );

  const weekDay = await findByText(/Lunes/);
  const hour = await findByText(/15/);
  const temperature = await findByText(/20/);
  const state = await findByText(/sunny/);

  expect(weekDay).toHaveTextContent('Lunes');
  expect(hour).toHaveTextContent('15');
  expect(temperature).toHaveTextContent('20');
  expect(state).toHaveTextContent('sunny');
});
