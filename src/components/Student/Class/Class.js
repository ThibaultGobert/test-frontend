import React from 'react';
import {PropTypes} from 'prop-types';
import LessonList from '../../shared/LessonList';
import Loader from '../../shared/Loader';
import Reloader from "../../shared/Reloader";
import * as slideTypes from '../../../constants/slideTypes';

const Class = ({lessons}) => {
  return (
      <div>
        <h1>Klaslessen</h1>
        <LessonList lessons={lessons} slideType={slideTypes.CLASS} showLockedLessons/>
      </div>
    );
};

export default Class;
