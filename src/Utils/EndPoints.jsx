const appid = '155d8f85aa9b8c0a83c0593cee2a098f';
export const getWeatherUrl = ({ city, countryCode }) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;

export const getForecastUrl = ({ city }) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}`;
