import React from 'react';
import { Message } from 'semantic-ui-react';
import Accordion from '../../../shared/Accordion/Accordion';
import mapToCoursePanels from './mapToCoursePanels';
import CourseContent from './CourseContent';

const CoursesAccordion = ({ courses, teachers, locations }) => {
  const headerFields = ['Naam', 'Type', 'Clan', 'Level', 'Locatie', 'Lokaal'];

  return (
    <div>
      {courses.length > 0 && (
        <Accordion
          panels={mapToCoursePanels(courses, teachers, locations)}
          headerFields={headerFields}
          renderContent={content => {
            return <CourseContent course={content} />;
          }}
          className="CourseAccordion"
        />
      )}
      {courses.length === 0 && <Message>U bent nog niet ingepland</Message>}
    </div>
  );
};

export default CoursesAccordion;
