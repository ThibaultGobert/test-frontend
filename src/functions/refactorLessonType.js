export default (lesson) => {
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
