import React from 'react';
import { render } from '@testing-library/react';
import WeatherDetails from './WeatherDetails';

// findByText: Permite encontrar un componente por el texto que muestra.

test('WeatherDetails render', async () => {
  const { findByText } = render(<WeatherDetails wind={9} humidity={10} />);

  // Expresión regular REGEXP
  const wind = await findByText(/9/);
  const humidity = await findByText(/10/);

  expect(wind).toHaveTextContent('Viento: 9 km/h');
  expect(humidity).toHaveTextContent('Humedad: 10%');
});
