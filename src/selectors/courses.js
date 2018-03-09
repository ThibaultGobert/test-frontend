import filter from 'lodash/filter';
import createDate from '../functions/createDate';

// TODO quick fix lessons should not be a dependency
const sortCourses = (lessons, courses) => {
  return courses.sort((a, b) => {
    if (!a || !b || !a.lessons[0] || !b.lessons[0]) {
      return -1;
    }

    const dateA = lessons.data[a.lessons[0]].courseStartdate;
    const dateB = lessons.data[b.lessons[0]].courseStartdate;

    const lessonDateA = createDate(dateA);
    const lessonDateB = createDate(dateB);
    if (lessonDateA.getDay() === lessonDateB.getDay()) {
      return lessonDateA.getHours() - lessonDateB.getHours();
    }
    return lessonDateA.getDay() - lessonDateB.getDay();
  });
};


export const getCourses = state => {
  return sortCourses(state.lessons, filter(state.courses.data, course => !course.replacement));
};

export const getReplacementCourses = state => {
  return sortCourses(state.lessons, filter(state.courses.data, course => course.replacement));
};

export const getCourseById = (state, courseId) => {
  return state.courses.data[courseId];
};

export const isAssistentOnCourse = (state, course) => {
  const loggedInUserId = state.loggedIn.data.id;
  return course.assistants.includes(loggedInUserId);
};
