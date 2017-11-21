import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Accordion from './Content/Accordion';

class ClassGroups extends React.Component {
  constructor(...props) {
    super(...props);

    this.mapToPanels = this.mapToPanels.bind(this);
  }

  mapToPanels() {
    const { locations, users, courses } = this.props;

    return courses.map(course => {
      const headTeacher = users[course.headTeacher];
      const assistants = course.assistants.map(userId => {
        return users[userId];
      });
      const location = locations[course.location];

      return {
        title: {
          name: course.name,
          type: course.type,
          group: course.clan,
          level: course.level,
          location: location.name
        },
        content: {
          id: course.id,
          headteacher: {
            name: headTeacher.firstname + ' ' + headTeacher.lastname,
            email: headTeacher.email,
            phone: headTeacher.phone,
            cellphone: headTeacher.cellphone
          },
          assistants: assistants,
          location: {
            address: location.address,
            city: location.city,
            organisation: location.organisation,
            room: location.roomname,
            roomremark: location.roomremark
          }
        }
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Klasgroepen</h1>
        <div className="subtitle">Bekijk hier je lessen en download de klaslijsten</div>

        <Accordion panels={this.mapToPanels()} />
      </div>
    );
  }
}

ClassGroups.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object),
};

export default ClassGroups;
