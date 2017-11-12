import _ from 'lodash';

export default (data) => {
  data = data.sort((a, b) => {
    let lessonDateA = createDate(a.lessons[0].courseStartdate);
    let lessonDateB = createDate(b.lessons[0].courseEnddate);
    let hoursDateA = parseInt(a.starttime.split(':')[0], 10);
    let hoursDateB = parseInt(b.starttime.split(':')[0], 10);
    if(lessonDateA.getDay() === lessonDateB.getDay()) {
      return hoursDateA - hoursDateB;
    }
    return lessonDateA.getDay() - lessonDateB.getDay();
  });

  return data.map(course => {
    return _.omit(course, 'lessons');
  });
};

const createDate = (dateString) => {
  let splitted = dateString.split(' ');
  const hour = splitted[1].split(':')[0];
  const minutes = splitted[1].split(':')[1];
  let dayMonthYear = splitted[0].split('-');
  const day = dayMonthYear[0];
  const month = parseInt(dayMonthYear[1], 10);
  const year = dayMonthYear[2];
  let date = new Date(year, month - 1, day, hour, minutes);
  return date;
};
