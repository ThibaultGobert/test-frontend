import React from 'react';
import { Button } from 'semantic-ui-react';

const getRefactoredLessonType = (lesson) => {
  switch (lesson.slideType) {
    case 'CLASSPROJECTION':
      return 'Presentatie';
    case 'CLASS':
      return 'Klas';
    case 'HOME':
      return 'Thuis';
    case 'INFO':
      return 'Info';
    default:
      return 'Type Error';
  }
};

const generateUrl = (slide, loggedInUser, lesson) => {
  let formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe5cqrRK5t0m_oBgiW7vavymXHiVOi4dHkwDhmZppxiQoqOtA/viewform?usp=pp_url&entry.1028113136&entry.2145939336=name&entry.410557796=slideId&entry.2130843617=type&entry.1966597930=clan&entry.730223016=level';
  const slideId = `${lesson.id}_${slide.order}`;
  formUrl = formUrl
    .replace('name', loggedInUser.fullname)
    .replace('slideId', slideId)
    .replace('type', getRefactoredLessonType(lesson))
    .replace('clan', lesson.group)
    .replace('level', lesson.level);
  return formUrl;
};


const FeedBackButton = ({ slide, loggedInUser, lesson }) => {
  return (
    <a target="_blank" href={generateUrl(slide, loggedInUser, lesson)}>
      <Button primary size="mini">FEEDBACK</Button>
    </a>
  );
};

export default FeedBackButton;
