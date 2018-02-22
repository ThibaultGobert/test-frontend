import React from 'react';
import { Container, List, Button } from 'semantic-ui-react';
import renderHtml from 'react-render-html';
import './Location.css';

const Location = ({ location, teachers, history }) => {
  return (
    <Container className="Location">
      <Button labelPosition="left" icon="left chevron" content="Terug" onClick={history.goBack} />

      <h1>{location.name}</h1>
      {location.teacherremark && (
        <div className="Location__Remark">
          <p><strong>ADRES</strong></p>
          <p>{location.address.street}</p>
          <p>{location.address.city}</p>
          <p>{location.address.province}</p>
          {renderHtml(location.teacherremark)}
        </div>
      )}

      {location.teachers && (
        <div>
          <h1>Leraren</h1>
          <List className="Location__TeacherList">
            {location.teachers.map(teacherId => {
              const teacher = teachers[teacherId];
              return (
                <List.Item className="Location__TeacherListItem">
                  <List.Content className="Location__TeacherListItem__Content">
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
        <div>
          <h1>Lokalen</h1>
          <List className="Location__RoomList">
            {location.rooms.map(room => {
              return (
                <List.Item className="Location__RoomListItem">
                  <List.Content>
                    <List.Header className="Location__RoomListItem__Header">{room.name}</List.Header>
                    {room.teacherRemark && <List.Description>{renderHtml(room.teacherRemark)}</List.Description>}
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
