import { useState, useEffect } from 'react';
import axios from 'axios';
import { getWeatherUrl } from '../Utils/EndPoints';
import { getCityCode } from '../Utils/utils';
import getAllWeater from '../Utils/Transform/getAllWeather';

const useCityList = (cities, allWeather, onSetAllWeather) => {
  const [error, setError] = useState(null);
  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const url = getWeatherUrl({ city, countryCode });
      try {
        const propName = getCityCode(city, countryCode);
        onSetAllWeather({ [propName]: {} });
        const response = await axios.get(url);
        const allWeatherAux = getAllWeater(response, city, countryCode);
        onSetAllWeather(allWeatherAux);
      } catch (error) {
        if (error.response) {
          //Errores del server
          setError('Ha ocurrido un error en el servidor del clima');
        } else if (error.request) {
          //Errores que suceden por no llegar al server
          setError('Verifique su conexión a internet');
        } else {
          //Errores imprevistos
          setError('Error al cargar los datos');
        }
      }
    };

    cities.forEach(({ city, countryCode }) => {
      if (!allWeather[getCityCode(city, countryCode)]) {
        setWeather(city, countryCode);
      }
    });
  }, [cities, allWeather, onSetAllWeather]);
  return { error, setError };
};

export default useCityList;
