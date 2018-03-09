export const formatBirthdate = (birthdate) => {
  if (birthdate) {
    const splitted = birthdate.split('-');
    return `${splitted[2]}/${splitted[1]}/${splitted[0]}`;
  }
  return 'dag/maand/jaar';
};
