export default (courses, teachers, locations) => {
  return courses.map(course => {
    const assistants = course.assistants.map(userId => {
      return teachers[userId];
    });
    const headTeacher = course.headTeacher.map(userId => {
      return teachers[userId];
    });
    const location = locations[course.location];

    return {
      title: {
        name: course.name,
        type: course.type,
        group: course.clan,
        level: course.level,
        location: location.name,
        room: course.roomname,
      },
      content: {
        id: course.id,
        headTeacher,
        assistants,
        location: {
          address: location.address,
          organisation: location.organisation,
          id: location.id,
        },
      },
    };
  });
};
