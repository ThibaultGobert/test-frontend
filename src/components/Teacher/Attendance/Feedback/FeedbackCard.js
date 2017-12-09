import React from 'react';
import {Icon, Card, Image} from 'semantic-ui-react';

const FeedbackCard = ({course, user}) => {
  return (
    <Card>
      <Image className="FeedbackModal__Avatar" src={user.avatarurllarge}  />
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <span className="date" />
        </Card.Meta>
        <Card.Description>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {course.clan} {user.level}
        </a>
      </Card.Content>
    </Card>
  );
};

export default FeedbackCard;
