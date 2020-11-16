import React from 'react';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AppFrame from './../Components/AppFrame';
import CityList from '../Components/CityList';
import { getCities } from '../Utils/Services/serviceCities';

const MainPage = ({ actions, data }) => {
  const history = useHistory();
  const onClickHandler = (city, countryCode) => {
    // history.push permite alterar la URL por programación
    history.push(`/city/${countryCode}/${city}`);
  };
  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          data={data}
          actions={actions}
          cities={getCities()}
          onClickCity={onClickHandler}
        />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
