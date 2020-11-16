import React, { useMemo } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import CityInfo from '../Components/CityInfo';
import Weather from '../Components/Weather';
import WeatherDetails from '../Components/WeatherDetails';
import ForecastChart from '../Components/ForecastChart';
import Forecast from '../Components/Forecast';
import AppFrame from '../Components/AppFrame';
import useCityPage from '../Hooks/useCityPage';
import useCityList from '../Hooks/useCityList';
import { getCityCode } from '../Utils/utils';
import { getCountryNameByCountryCode } from '../Utils/Services/serviceCities';

const CityPage = ({ actions, data }) => {
  const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions;
  const { allWeather, allChartData, allForecastItemList } = data;

  const { city, countryCode } = useCityPage(
    onSetChartData,
    onSetForecastItemList,
    allChartData,
    allForecastItemList
  );

  const cities = useMemo(() => [{ city, countryCode }], [city, countryCode]);

  useCityList(cities, allWeather, onSetAllWeather);

  const cityCode = getCityCode(city, countryCode);
  const weather = allWeather[cityCode];
  const chartdData = allChartData[cityCode];
  const forecastItemList = allForecastItemList[cityCode];

  const country = getCountryNameByCountryCode(countryCode);

  const state = weather && weather.state;
  const temperature = weather && weather.temperature;
  const wind = weather && weather.wind;
  const humidity = weather && weather.humidity;

  return (
    <AppFrame>
      <Grid container justify="space-around" direction="column" spacing={2}>
        <Grid container item xs={12} justify="center" alignItems="flex-end">
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Weather state={state} temperature={temperature} />
          {humidity && wind && (
            <WeatherDetails humidity={humidity} wind={wind} />
          )}
        </Grid>
        <Grid item>
          {!chartdData && !forecastItemList && <LinearProgress />}
        </Grid>
        <Grid item xs={12}>
          {chartdData && <ForecastChart data={chartdData} />}
        </Grid>
        <Grid item xs={12}>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
