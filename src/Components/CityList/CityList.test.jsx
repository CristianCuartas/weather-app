import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CityList from './CityList';

const cities = [
  { city: 'Bogotá', country: 'Colombia' },
  { city: 'Buenos Aires', country: 'Argentina' },
];

test('CityList renders', async () => {
  const { findAllByRole } = render(<CityList cities={cities} />);

  const listCities = await findAllByRole('button');

  expect(listCities).toHaveLength(2);
});

test('CityList click on item', async () => {
  //Simular una acción del usuario: click sobre un item
  //Función "mock" => Imita la función real
  const fnClickOnItem = jest.fn();
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );
  const items = await findAllByRole('button');
  //Utilizar fireEvet para simulr la acción libreria testing-librry/react
  fireEvent.click(items[0]);
  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
