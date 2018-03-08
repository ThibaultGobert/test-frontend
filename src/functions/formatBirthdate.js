export const formatBirthdate = (birthdate) => {
  const splitted = birthdate.split('-');
  return `${splitted[2]}/${splitted[1]}/${splitted[0]}`;
};
