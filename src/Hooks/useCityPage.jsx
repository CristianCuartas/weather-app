import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { getForecastUrl } from '../Utils/EndPoints';
import getChartData from '../Utils/Transform/getChartData';
import getForecastItemList from '../Utils/Transform/getForecastItemList';
import { getCityCode } from '../Utils/utils';

const useCityPage = (actions, allChartData, allForecastItemList) => {
  const { countryCode, city } = useParams();

  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city });
      const cityCode = getCityCode(city, countryCode);
      try {
        const response = await axios.get(url);
        const dataAux = getChartData(response);
        actions({ type: 'SET_CHART_DATA', payload: { [cityCode]: dataAux } });
        const forecastItemListAux = getForecastItemList(response);
        actions({
          type: 'SET_FORECAST_ITEM_LIST',
          payload: { [cityCode]: forecastItemListAux },
        });
      } catch (error) {
        console.log(error);
      }
    };
    const cityCode = getCityCode(city, countryCode);
    if (
      allChartData &&
      allForecastItemList &&
      !allChartData[cityCode] &&
      !allForecastItemList[cityCode]
    ) {
      getForecast();
    }
  }, [city, countryCode, actions, allChartData, allForecastItemList]);
  return { city, countryCode };
};

export default useCityPage;
