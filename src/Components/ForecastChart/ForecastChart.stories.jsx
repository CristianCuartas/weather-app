import React from 'react';
import ForecastChart from './ForecastChart';

export default {
  title: 'ForecastChart',
  component: ForecastChart,
};

const data = [
  {
    dayHour: 'Lun 28',
    min: 14,
    max: 22,
  },
  {
    dayHour: 'Mar 29',
    min: 18,
    max: 27,
  },

  {
    dayHour: 'Mie 30',
    min: 11,
    max: 28,
  },

  {
    dayHour: 'Jue 01',
    min: 9,
    max: 15,
  },

  {
    dayHour: 'Vie 02',
    min: 14,
    max: 22,
  },

  {
    dayHour: 'Sab 03',
    min: 10,
    max: 22,
  },

  {
    dayHour: 'Dom 04',
    min: 7,
    max: 18,
  },
];

export const ForecastChartExample = () => <ForecastChart data={data} />;
