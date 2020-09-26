import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CityList from '../Components/CityList';

const cities = [
  { city: 'Bogotá', country: 'Colombia' },
  { city: 'Buenos Aires', country: 'Argentina' },
];

const MainPage = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    // history.push permite alterar la URL por programación
    history.push('/city');
  };
  return (
    <div>
      <CityList cities={cities} onClickCity={onClickHandler} />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
