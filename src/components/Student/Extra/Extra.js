import React from 'react';
import {PropTypes} from 'prop-types';
import LessonList from '../../shared/LessonList';
import * as slideTypes from '../../../constants/slideTypes';

const Extra = ({lessons}) => {
  return (
    <div>
      <h1>Extra uitdagingen</h1>
      <LessonList lessons={lessons} slideType={slideTypes.CLASS} showLockedLessons/>
    </div>
  );
};

export default Extra;
