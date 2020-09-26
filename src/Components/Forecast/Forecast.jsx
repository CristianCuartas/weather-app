import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ForecastItem from './../ForecastItem';
import { validValues } from './../IconState';

const renderForecastItem = (forecast) => {
  const { hour, weekDay, temperature, state } = forecast;
  // Hay que establecer un idetificador único en la lista

  // Establcer ua marca para encontrar para encontrar cada item (ForecastItem)
  return (
    <Grid data-testid="forecast-item-container" item key={`${weekDay}${hour}`}>
      <ForecastItem
        hour={hour}
        weekDay={weekDay}
        temperature={temperature}
        state={state}
      ></ForecastItem>
    </Grid>
  );
};
const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container justify="space-around" alignItems="center">
      {forecastItemList.map((forecast) => renderForecastItem(forecast))}
    </Grid>
  );
};

// forecastItemList es un array de elementos con una forma en particular.

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      hour: PropTypes.number.isRequired,
      weekDay: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Forecast;
