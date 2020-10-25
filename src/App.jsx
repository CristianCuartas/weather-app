import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import MainPage from './Pages/MainPage';
import CityPage from './Pages/CityPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/main">
          <MainPage />
        </Route>
        <Route exact path="/city">
          <CityPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
