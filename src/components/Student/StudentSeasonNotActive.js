import React from 'react';
import { Image } from 'semantic-ui-react';
import * as userRoles from '../../constants/roles';
import StudentHeader from '../shared/headers/StudentHeader';
import WorkshopStudentHeader from '../shared/headers/WorkshopStudentHeader';
import WaitForFirstLessonImage from '../../assets/images/kingston_wait_for_first_lesson.png';

const StudentSeasonNotActive = ({ user }) => {
  return (
    <div className="WaitForFirstLesson">
      {user.role === userRoles.WORKSHOP_STUDENT_ROLE && <WorkshopStudentHeader user={user} />}
      {user.role === userRoles.STUDENT_ROLE && <StudentHeader user={user} />}

      <Image src={WaitForFirstLessonImage} centered />
    </div>
  );
};

export default StudentSeasonNotActive;
