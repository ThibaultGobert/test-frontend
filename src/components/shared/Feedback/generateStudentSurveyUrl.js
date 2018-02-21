import generateHashFromUsername from '../../../functions/generateHashFromUsername';

export default (data) => {
  const { user } = data;
  if (user) {
    let formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfJuKns1Y-fEepHUw5s7QLTvMu-FooShKnh41jOD1LqLZIouw/viewform?usp=pp_url&entry.1102385648=name';
    formUrl = formUrl.replace('name', generateHashFromUsername(user.fullname));
    return formUrl;
  }
  return null;
};
