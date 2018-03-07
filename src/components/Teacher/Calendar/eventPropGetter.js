import * as eventTypes from '../../../constants/eventTypes';

export default (event) => {
  const newStyle = {
    backgroundColor: '#0e61b9',
    color: '#fff',
    borderRadius: '3px',
    border: 'none',
  };

  if (event.lessonTypeEnum === eventTypes.STATUS_TEACHERDOESREPLACEMENT) {
    newStyle.backgroundColor = '#ef6c00';
  }
  if (event.lessonTypeEnum === eventTypes.STATUS_TEACHERISREPLACED) {
    newStyle.backgroundColor = '#ff0000';
  }

  return {
    className: '',
    style: newStyle,
  };
};
