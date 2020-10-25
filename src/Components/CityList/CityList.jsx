import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import convertUnits from 'convert-units';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Alert from '@material-ui/lab/Alert';
import CityInfo from '../CityInfo';
import Weather from '../Weather';

const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

// li: Tag HTML para  agregar un item
// renderCityandCountry se va a convertir en un callback
const renderCityAndCountry = (eventOnClickCity) => {
  const renderCityAndCountryInternal = (cityAndCountry, weather) => {
    const { city, country, countryCode } = cityAndCountry;
    return (
      <ListItem
        button
        key={getCityCode(city, countryCode)}
        onClick={eventOnClickCity}
      >
        <Grid container justify="center" alignItems="center">
          <Grid item md={9} xs={12}>
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Weather
              temperature={weather && weather.temperature}
              state={weather && weather.state}
            />
          </Grid>
        </Grid>
      </ListItem>
    );
  };
  return renderCityAndCountryInternal;
};
// cities: Es un arreglo que en sus items tiene la ciudad y el país
// ul: Tag HTML para listas no ordenadas
const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setallWeather] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const appid = '155d8f85aa9b8c0a83c0593cee2a098f';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;
      try {
        const response = await axios.get(url);
        const { data } = response;
        const temperature = Number(
          convertUnits(data.main.temp).from('K').to('C').toFixed(0)
        );
        const state = data.weather[0].main.toLowerCase();
        const propName = getCityCode(city, countryCode);
        const propValue = { temperature, state };

        setallWeather((allWeather) => ({
          ...allWeather,
          [propName]: propValue,
        }));
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
      setWeather(city, countryCode);
    });
  }, [cities]);

  return (
    <div>
      {error && (
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      )}
      <List>
        {cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCountry,
            allWeather[
              getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
            ]
          )
        )}
      </List>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
