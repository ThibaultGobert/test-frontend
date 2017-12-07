import moment from 'moment';

export const diffToday = date => {
  return date.diff(moment(), 'days');
};

const isToday = date => {
  return diffToday(date) === 0;
};

export default isToday;
