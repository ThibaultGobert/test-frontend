export default (name) => {
  let hash = '';
  for (let i = 0; i < name.length; i += 1) {
    hash += `${Number(name.charCodeAt(i)) * name.length}-`;
  }
  hash = hash.slice(0, -1);
  return hash;
};
