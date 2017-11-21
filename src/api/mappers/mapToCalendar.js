import createDate from '../../functions/createDate';

export default (data) => {
  return data.map(lesson => {
    if (lesson.courseStartdate === undefined || lesson.courseEnddate === undefined) {
      return null;
    }

    lesson.start = createDate(lesson.courseStartdate);
    lesson.end = createDate(lesson.courseEnddate);
    return lesson;
  });
};
