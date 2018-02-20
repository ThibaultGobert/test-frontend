import React from 'react';
import { Container, List, Image, Button } from 'semantic-ui-react';
import renderHtml from 'react-render-html';
import './Location.css';

const Location = ({ location, teachers, history }) => {
  return (
    <Container className="Location">
      <Button labelPosition="left" icon="left chevron" content="Terug" onClick={history.goBack} />

      <h1>{location.name}</h1>
      {location.teacherremark && <div className="Location__Remark">{renderHtml(location.teacherremark)}</div>}

      {location.teachers && (
        <div className="Location__TeacherList">
          <h1>Leraren</h1>
          <List>
            {location.teachers.map(teacherId => {
              const teacher = teachers[teacherId];
              return (
                <List.Item>
                  <List.Content className="Location__TeacherListItem">
                    <List.Header className="Location__TeacherListItem__Header">
                      {teacher.firstName} {teacher.lastName}
                    </List.Header>
                    <List.Description>
                      {teacher.cell} - {teacher.email}
                    </List.Description>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </div>
      )}

      {location.rooms && (
        <div className="Location__RoomList">
          <h1>Lokalen</h1>
          <List>
            {location.rooms.map(room => {
              return (
                <List.Item className="Location__RoomListItem">
                  <List.Content>
                    <List.Header className="Location__RoomListItem__Header">{room.name}</List.Header>
                    <List.Description>{renderHtml(room.teacherRemark)}</List.Description>
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
