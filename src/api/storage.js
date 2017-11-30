export const getUser = () => {
  return JSON.parse(window.localStorage.getItem('api.user'));
};

export const setUser = (newUser) => {
  window.localStorage.setItem('api.user', JSON.stringify(newUser));
};

export const removeUser = () => {
  window.localStorage.removeItem('api.user');
};
