/*
                TEST AAA 
        Arrange (Organizar)- Act (Actúe)- Assert (Afirmar)
        * Definir el componente a testear
        * Realizar consultas sobre lo que sucedio en el render
        * Objetivo: Testear cada componente 
        *  FindAllByRole => Encontrar todoso los componentes seleccionados por un determinado rol (componentes que actuan como titulos, inputs...)
        * ¿Cuando el test va a ser correcto? 
        * Estructura: 
        *   test(string => Representa al test, cuerpo del test => Arrange metodo render de @testing-library/react)
                                                                  Act findAllByRole()
                                                                  Assert Consultar el resultado del test
    */

import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo'; // SUT : Subject under testing (Sujeto bajo prueba)

test('CityInfo render', async () => {
  const city = 'Bogotá';
  const country = 'Colombia';
  const { findAllByRole } = render(
    <CityInfo city="Bogotá" country="Colombia" />
  );

  //"heading" => H1, H2, H3 ... etc
  const cityAndCountryComponents = await findAllByRole('heading');

  // ¿Cuando el test va a ser correcto?
  // Cuando el primer elemento (heading) se encuentre la ciudad "Bogotá"
  // y cuando en el segundo elemento se encuentre el pasis "Colombia"

  expect(cityAndCountryComponents[0]).toHaveTextContent(city);
  expect(cityAndCountryComponents[1]).toHaveTextContent(country);
  /* expect(Resultado obtenido.Comparador(Resultado esperado)*/

  // Si estas condciones se cuplen (expect) el test "OK"
});
