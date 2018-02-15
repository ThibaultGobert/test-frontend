import React from 'react';
import { Button } from 'semantic-ui-react';
import * as roles from '../../../constants/roles';

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

const getHashFromName = (name) => {
  let hash;
  for (let i = 0; i < name.length; i += 1) {
    hash += `${Number(name.charCodeAt(i)) * name.length}-`;
  }
  hash = hash.slice(0, -1);
  return hash;
};

const generateUrl = (slide, loggedInUser, lesson) => {
  let formUrl;
  if (loggedInUser.role === roles.TEACHER_ROLE) {
    formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe5cqrRK5t0m_oBgiW7vavymXHiVOi4dHkwDhmZppxiQoqOtA/viewform?usp=pp_url&entry.1028113136&entry.2145939336=name&entry.410557796=slideId&entry.2130843617=type&entry.1966597930=clan&entry.730223016=level';
    const slideId = `${lesson.id}_${slide.order}`;
    formUrl = formUrl
      .replace('name', loggedInUser.fullname)
      .replace('slideId', slideId)
      .replace('type', getRefactoredLessonType(lesson))
      .replace('clan', lesson.group)
      .replace('level', lesson.level);
  } else {
    formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfJuKns1Y-fEepHUw5s7QLTvMu-FooShKnh41jOD1LqLZIouw/viewform?usp=pp_url&entry.1102385648=name';
    formUrl = formUrl.replace('name', getHashFromName(loggedInUser.fullname));
  }

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
