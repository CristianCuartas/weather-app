import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CityInfo from '../Components/CityInfo';
import Weather from '../Components/Weather';
import WeatherDetails from '../Components/WeatherDetails';
import ForecastChart from '../Components/ForecastChart';
import Forecast from '../Components/Forecast';
import { Grid } from '@material-ui/core';

const dataExample = [
  {
    dayHour: 'Lun 28',
    min: 14,
    max: 22,
  },
  {
    dayHour: 'Mar 29',
    min: 18,
    max: 27,
  },

  {
    dayHour: 'Mie 30',
    min: 11,
    max: 28,
  },

  {
    dayHour: 'Jue 01',
    min: 9,
    max: 15,
  },

  {
    dayHour: 'Vie 02',
    min: 14,
    max: 22,
  },

  {
    dayHour: 'Sab 03',
    min: 10,
    max: 22,
  },

  {
    dayHour: 'Dom 04',
    min: 7,
    max: 18,
  },
];

const forecastItemListExample = [
  { hour: 7, state: 'cloud', temperature: 10, weekDay: 'Lunes' },
  { hour: 9, state: 'rain', temperature: 10, weekDay: 'Martes' },
  { hour: 12, state: 'sunny', temperature: 10, weekDay: 'Miercoles' },
  { hour: 15, state: 'fog', temperature: 10, weekDay: 'Jueves' },
  { hour: 18, state: 'cloudy', temperature: 10, weekDay: 'Viernes' },
  { hour: 21, state: 'rain', temperature: 10, weekDay: 'Sábado' },
  { hour: 0, state: 'rain', temperature: 10, weekDay: 'Domingo' },
];
const CityPage = (props) => {
  const city = 'Bogotá';
  const country = 'Colombia';
  const state = 'cloudy';
  const temperature = 20;
  const wind = 5;
  const humidity = 80;
  const data = dataExample;
  const forecastItemList = forecastItemListExample;

  return (
    <Grid container justify="space-around" direction="column" spacing={2}>
      <Grid container item xs={12} justify="center" alignItems="flex-end">
        <CityInfo city={city} country={country} />
      </Grid>
      <Grid container item xs={12} justify="center">
        <Weather state={state} temperature={temperature} />

        <WeatherDetails humidity={humidity} wind={wind} />
      </Grid>
      <Grid item xs={12}>
        <ForecastChart data={data} />
      </Grid>
      <Grid item xs={12}>
        <Forecast forecastItemList={forecastItemList} />
      </Grid>
    </Grid>
  );
};

CityPage.propTypes = {};

export default CityPage;
