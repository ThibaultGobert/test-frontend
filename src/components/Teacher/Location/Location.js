import React from 'react';
import { Container, List, Image, Button } from 'semantic-ui-react';
import renderHtml from 'react-render-html';
import './Location.css';

const Location = ({ location, teachers, history }) => {
  return (
    <Container className="Location">
      <Button
        labelPosition="left"
        icon="left chevron"
        content="Terug"
        onClick={history.goBack}
      />

      <h1>{location.name}</h1>
      {location.remark && renderHtml(location.remark)}

      {location.teachers && (
        <div className="Location__Teachers">
          <h1>Leraren</h1>
          <List>
            {location.teachers.map(teacherId => {
              const teacher = teachers[teacherId];
              return (
                <List.Item>
                  <Image avatar src={teacher.avatarurlmedium} />
                  <List.Content>
                    <List.Header as="a">
                      {teacher.firstname} {teacher.lastname}
                    </List.Header>
                    <List.Description>
                      {teacher.cellphone} - {teacher.email}
                    </List.Description>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </div>
      )}

      {location.rooms && (
        <div className="Location__Rooms">
          <h1>Lokalen</h1>
          <List divided>
            {location.rooms.map(room => {
              return (
                <List.Item>
                  <List.Content>
                    <List.Header as="a">{room.name}</List.Header>
                    <List.Description>{room.remark}</List.Description>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </div>
      )}
    </Container>
  );
};

export default Location;
