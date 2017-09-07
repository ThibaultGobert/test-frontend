import _ from 'lodash';

export default (data) => {
  return data.map(course => {
    return _.omit(course, ['headTeacher', 'assitents', 'location']);
  });
};


