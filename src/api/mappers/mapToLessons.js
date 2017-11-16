import _ from 'lodash';

export default (data) => {
  const  lessons = data.filter(lesson => lesson.activateStudent);
  if (_.isEmpty(lessons)) {
    throw new Error("Geen lessen beschikbaar");
  }
  return lessons;
};
