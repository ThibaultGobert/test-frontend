export default (course, teachers, loggedInUser) => {
  const loggedInUserId = teachers.find(x => x.username === loggedInUser.username).id;
  return course.assistants.includes(loggedInUserId);
};
