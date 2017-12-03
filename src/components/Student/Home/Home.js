import React from 'react';
import {PropTypes} from 'prop-types';
import LessonList from '../../shared/LessonList';
import * as slideTypes from '../../../constants/slideTypes';

const Home = ({lessons}) => {
  return (
    <div>
      <h1>De thuisversies</h1>
      <LessonList lessons={lessons} slideType={slideTypes.CLASS} showLockedLessons/>
    </div>
  );
};

Home.propTypes = {
  lessons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
