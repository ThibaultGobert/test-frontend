
export default (data) => {
  if (data.fullname == "Workshop ByteBuster" ||
    data.fullname == "Workshop CodeKrak" ||
    data.fullname == "Workshop DigiHero") {
    data.role = "WORKSHOP_STUDENT";
  }
  return data;
};
