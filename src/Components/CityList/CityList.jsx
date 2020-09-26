import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CityInfo from '../CityInfo';
import Weather from '../Weather';

// li: Tag HTML para  agregar un item
// renderCityandCountry se va a convertir en un callback
const renderCityAndCountry = (eventOnClickCity) => {
  const renderCityAndCountryInternal = (cityAndCountry) => {
    const { city, country } = cityAndCountry;
    return (
      <ListItem button key={city} onClick={eventOnClickCity}>
        <Grid container justify="center" alignItems="center">
          <Grid item md={8} xs={12}>
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid item md={4} xs={12}>
            <Weather temperature={10} state={'sunny'} />
          </Grid>
        </Grid>
      </ListItem>
    );
  };
  return renderCityAndCountryInternal;
};
// cities: Es un arreglo que en sus items tiene la ciudad y el país
// ul: Tag HTML para listas no ordenadas
const CityList = ({ cities, onClickCity }) => {
  const fnAux = renderCityAndCountry(onClickCity); // Única función como manejador del evento
  return (
    <List>
      {cities.map(
        (cityAndCountry) => fnAux(cityAndCountry) // Única instancia de función por cada fila
      )}
    </List>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
