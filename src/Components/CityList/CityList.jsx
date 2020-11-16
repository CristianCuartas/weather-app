import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Alert from '@material-ui/lab/Alert';
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import { getCityCode } from '../../Utils/utils';
import useCityList from '../../Hooks/useCityList';

// li: Tag HTML para  agregar un item
// renderCityandCountry se va a convertir en un callback
const renderCityAndCountry = (eventOnClickCity) => {
  const renderCityAndCountryInternal = (cityAndCountry, weather) => {
    const { city, country, countryCode } = cityAndCountry;
    return (
      <ListItem
        button
        key={getCityCode(city, countryCode)}
        onClick={() => eventOnClickCity(city, countryCode)}
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
const CityList = ({ cities, onClickCity, actions, data }) => {
  const { onSetAllWeather } = actions;
  const { allWeather } = data;
  const { error, setError } = useCityList(cities, allWeather, onSetAllWeather);
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
