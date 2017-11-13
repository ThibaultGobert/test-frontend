import React from 'react';
import {Table, Icon, Button} from 'semantic-ui-react';
import * as slideTypes from '../../constants/slideTypes';
import {Link} from 'react-router';
import _ from 'lodash';

const ManageLessonList = ({lessons}) => {
  return (
    <div className="manage-lesson-list">
      <Table columns={10}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Clan</Table.HeaderCell>
            <Table.HeaderCell>Level</Table.HeaderCell>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Versie</Table.HeaderCell>
            <Table.HeaderCell>Naam</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Volgorde</Table.HeaderCell>
            <Table.HeaderCell>Beschikbaar leerkrachten</Table.HeaderCell>
            <Table.HeaderCell>Beschikbaar leerlingen</Table.HeaderCell>
            <Table.HeaderCell>Laatst gewijzigd door</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          { _.map(lessons, (lesson) => {
            let slideviewerUrl = "/slideviewer/" + lesson.id;

            return (
              <Table.Row key={lesson.id}>
                <Table.Cell>{lesson.group}</Table.Cell>
                <Table.Cell>{lesson.level}</Table.Cell>
                <Table.Cell>{lesson.id}</Table.Cell>
                <Table.Cell>{lesson.version}</Table.Cell>
                <Table.Cell>{lesson.name}</Table.Cell>
                <Table.Cell>{lesson.type}</Table.Cell>
                <Table.Cell>{lesson.order}</Table.Cell>
                <Table.Cell>{lesson.activateTeacher ? <Icon name="checkmark"/> : <Icon name="x"/> }</Table.Cell>
                <Table.Cell>{lesson.activateStudent ? <Icon name="checkmark"/> : <Icon name="x"/> }</Table.Cell>
                <Table.Cell>{lesson.modifiedby}</Table.Cell>
                <Table.Cell collapsing={false} className="manage-lesson-list-icons">
                  <Button as={Link} to={slideviewerUrl + "/" + slideTypes.CLASS} primary icon="group" size="mini"/>
                  <Button as={Link} to={slideviewerUrl + "/" + slideTypes.HOME} primary icon="home" size="mini"/>
                  <Button as={Link} to={slideviewerUrl + "/" + slideTypes.PROJECTION} primary icon="tv" size="mini"/>
                  <Button as={Link} to={slideviewerUrl + "/" + slideTypes.INFO} primary icon="info" size="mini"/>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageLessonList;
