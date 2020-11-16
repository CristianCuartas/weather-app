const cities = [
  { city: 'Bogotá', country: 'Colombia', countryCode: 'CO' },
  { city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR' },
];

export const getCities = () => cities;

export const getCountryNameByCountryCode = (countryCode) =>
  cities.filter((c) => c.countryCode === countryCode)[0].country;
