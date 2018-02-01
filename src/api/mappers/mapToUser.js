import * as roles from '../../constants/roles';
import userAdministrationApi from '../userAdministration';

export default (data, username) => {
  const mappedData = data;
  if (data.role === roles.STUDENT_ROLE) {
    return userAdministrationApi.getUserInformation(data.token).then(userInfo => {
      mappedData.isVersion2 = userInfo.isVersion2;
      return mappedData;
    });
  }
  mappedData.username = username;
  return mappedData;
};
