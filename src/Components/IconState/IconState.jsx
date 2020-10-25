import React from 'react';
import PropTypes from 'prop-types';
import {
  WiDayCloudy,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiRaindrop,
} from 'react-icons/wi';

export const validValues = [
  'drizzle',
  'clouds',
  'clear',
  'rain',
  'snow',
  'thunderstorm',
];

const stateByName = {
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm,
};

const IconState = ({ state }) => {
  const StateByName = stateByName[state];
  return <StateByName />;
};

IconState.propTypes = {};

export default IconState;
