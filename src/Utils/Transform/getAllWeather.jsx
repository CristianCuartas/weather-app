import { getCityCode, toCelsius } from '../../Utils/utils';
import { validValues } from '../../Components/IconState';

const getAllWeater = (response, city, countryCode) => {
  const { data } = response;
  const temperature = toCelsius(data.main.temp);
  const wind = data.wind.speed;
  const humidity = data.main.humidity;
  const stateFromServer = data.weather[0].main.toLowerCase();
  const state = validValues.includes(stateFromServer) ? stateFromServer : null;
  const propName = getCityCode(city, countryCode);
  const propValue = { temperature, state, wind, humidity };

  return {
    [propName]: propValue,
  };
};
export default getAllWeater;
