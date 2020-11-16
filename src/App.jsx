import React, { useState, useCallback, useMemo, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import MainPage from './Pages/MainPage';
import CityPage from './Pages/CityPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  const [state, dispatch] = useReducer();
  const [allWeather, setAllWeather] = useState({});
  const [allChartData, setChartData] = useState({});
  const [allForecastItemList, setForecastItemList] = useState({});

  const onSetAllWeather = useCallback(
    (weatherCity) => {
      setAllWeather((allWeather) => ({ ...allWeather, ...weatherCity }));
    },
    [setAllWeather]
  );

  const onSetChartData = useCallback(
    (chartDataCity) => {
      setChartData((chartdData) => ({ ...chartdData, ...chartDataCity }));
    },
    [setChartData]
  );

  const onSetForecastItemList = useCallback(
    (forecastItemListCity) => {
      setForecastItemList((forecastItemList) => ({
        ...forecastItemList,
        ...forecastItemListCity,
      }));
    },
    [setForecastItemList]
  );

  const actions = useMemo(
    () => ({
      onSetAllWeather,
      onSetChartData,
      onSetForecastItemList,
    }),
    [onSetAllWeather, onSetChartData, onSetForecastItemList]
  );
  const data = useMemo(
    () => ({
      allWeather,
      allChartData,
      allForecastItemList,
    }),
    [allWeather, allChartData, allForecastItemList]
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/main">
          <MainPage data={data} actions={actions} />
        </Route>
        <Route exact path="/city/:countryCode/:city">
          <CityPage data={data} actions={actions} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
