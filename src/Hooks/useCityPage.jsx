import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { getForecastUrl } from '../Utils/EndPoints';
import getChartData from '../Utils/Transform/getChartData';
import getForecastItemList from '../Utils/Transform/getForecastItemList';
import { getCityCode } from '../Utils/utils';

const useCityPage = (
  onSetChartData,
  onSetForecastItemList,
  allChartData,
  allForecastItemList
) => {
  const { countryCode, city } = useParams();

  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city });
      const cityCode = getCityCode(city, countryCode);
      try {
        const response = await axios.get(url);
        const dataAux = getChartData(response);
        const forecastItemListAux = getForecastItemList(response);
        onSetChartData({ [cityCode]: dataAux });
        onSetForecastItemList({ [cityCode]: forecastItemListAux });
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
  }, [
    city,
    countryCode,
    onSetChartData,
    onSetForecastItemList,
    allChartData,
    allForecastItemList,
  ]);
  return { city, countryCode };
};

export default useCityPage;
