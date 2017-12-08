import moment from 'moment';

export const diffToday = date => {
  return date.diff(moment(), 'days');
};

export const isToday = date => {
  return diffToday(date) === 0;
};

