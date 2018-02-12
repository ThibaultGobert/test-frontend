import React from 'react';
import Message from 'semantic-ui-react/dist/commonjs/collections/Message/Message';
import ClassGroupContent from './Content/ClassGroupContent';
import Accordion from '../../shared/Accordion/Accordion';

class ClassGroups extends React.Component {
  constructor(...props) {
    super(...props);
    this.mapToPanels = this.mapToPanels.bind(this);
  }

  mapToPanels() {
    const { locations, teachers, courses } = this.props;

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
        },
        content: {
          id: course.id,
          headTeacher,
          assistants,
          location: {
            address: location.address,
            city: location.city,
            organisation: location.organisation,
            room: location.roomname,
            roomremark: location.roomremark,
            id: location.id,
          },
        },
      };
    });
  }

  renderContent(content) {
    return <ClassGroupContent content={content} />;
  }

  render() {
    const headerFields = ['Naam', 'Type', 'Clan', 'Level', 'Locatie'];
    const { courses } = this.props;
    return (
      <div className="container">
        <h1>Klasgroepen</h1>
        <div className="subtitle">Bekijk hier je lessen en download de klaslijsten</div>
        <Message negative>
          <Message.Header>Deze planning is nog niet definitief</Message.Header>
          <p>
            Alles hangt af van de effectieve inschrijvingen. De finale planning vind je hier 5 dagen
            voor de start van lesreeks. We weten dat dit niet ideaal is en vragen je begrip!
          </p>
        </Message>
        {courses.length > 0 && (
          <Accordion
            panels={this.mapToPanels()}
            headerFields={headerFields}
            renderContent={this.renderContent}
          />
        )}
        {courses.length === 0 && (
          <Message>
            U bent nog niet ingepland
          </Message>
        )}
      </div>
    );
  }
}

export default ClassGroups;
