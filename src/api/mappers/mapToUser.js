import * as roles from '../../constants/roles';
import userAdministrationApi from '../userAdministration';

export default (data, credentials, isImpersonate) => {
  const mappedData = data;
  if (data.role === roles.STUDENT_ROLE) {
    return userAdministrationApi.getUserInformation(data.token).then(userInfo => {
      mappedData.isVersion2 = userInfo.isVersion2;
      return mappedData;
    });
  }
  if (isImpersonate) {
    mappedData.username = credentials.child_username;
  } else {
    mappedData.username = credentials.username;
  }
  return mappedData;
};
