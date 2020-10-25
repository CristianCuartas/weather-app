import React from 'react';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AppFrame from './../Components/AppFrame';
import CityList from '../Components/CityList';

const cities = [
  { city: 'Bogotá', country: 'Colombia', countryCode: 'CO' },
  { city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR' },
];

const MainPage = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    // history.push permite alterar la URL por programación
    history.push('/city');
  };
  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
