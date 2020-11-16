import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import MainPage from './Pages/MainPage';
import CityPage from './Pages/CityPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  const initialValue = {
    allWeather: {},
    allChartData: {},
    allForecastItemList: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_ALL_WEATHER':
        const weatherCity = action.payload;
        const newAllWeather = { ...state.allWeather, ...weatherCity };
        return { ...state, allWeather: newAllWeather };
      case 'SET_CHART_DATA':
        const chartdDataCity = action.payload;
        const newAllChartData = { ...state.allChartData, ...chartdDataCity };
        return { ...state, allChartData: newAllChartData };
      case 'SET_FORECAST_ITEM_LIST':
        const forecastItemListCity = action.payload;
        const newAllForecastItemList = {
          ...state.allForecastItemList,
          ...forecastItemListCity,
        };
        return { ...state, allForecastItemList: newAllForecastItemList };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/main">
          <MainPage data={state} actions={dispatch} />
        </Route>
        <Route exact path="/city/:countryCode/:city">
          <CityPage data={state} actions={dispatch} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
