import React from 'react';
import CoursesAccordion from './CoursesAccordion.js/CoursesAccordion';
import './ClassGroups.css';

class ClassGroups extends React.Component {
  render() {
    const { plannedCourses, replacements } = this.props;
    return (
      <div className="container">
        <h1>Klasgroepen</h1>
        <div className="subtitle">Bekijk hier je lessen en download de klaslijsten</div>
        <CoursesAccordion courses={plannedCourses} {...this.props} />

        <h1>Vervangingen</h1>
        <div className="subtitle">Bekijk hier je vervangingen</div>
        <CoursesAccordion courses={replacements} {...this.props} />
      </div>
    );
  }
}

export default ClassGroups;
