import _ from 'lodash';

export default (data) => {
  let startOfSeries = new Date("2017-09-1");
  let lessons = data.map(lesson => {
    let startDate = createDate(lesson.startdate);
    if (startDate > startOfSeries) {
      return lesson;
    }
  });
  lessons = _.without(lessons, undefined);
  return lessons;
};

const createDate = (dateString) => {
  let splitted = dateString.split(' ');
  const hour = splitted[1].split(':')[0];
  const minutes = splitted[1].split(':')[1];
  let dayMonthYear = splitted[0].split('-');
  const day = dayMonthYear[0];
  const month = parseInt(dayMonthYear[1]);
  const year = dayMonthYear[2];
  let date = new Date(year, month - 1, day, hour, minutes);
  return date;
};
