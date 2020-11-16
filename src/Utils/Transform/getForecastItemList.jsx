import { toCelsius } from '../../Utils/utils';
import moment from 'moment';

const getForecastItemList = (response) => {
  const { data } = response;
  const interval = [4, 8, 12, 16, 20, 24];
  const forecastItemListAux = data.list
    .filter((item, index) => interval.includes(index))
    .map((item) => {
      return {
        hour: moment.unix(item.dt).hour(),
        weekDay: moment.unix(item.dt).format('ddd'),
        state: item.weather[0].main.toLowerCase(),
        temperature: toCelsius(item.main.temp),
      };
    });
  return forecastItemListAux;
};
export default getForecastItemList;
