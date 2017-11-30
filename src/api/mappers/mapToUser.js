import * as roles from '../../constants/roles';
import userAdministrationApi from '../userAdministration';

export default (data) => {
  if (data.role === roles.STUDENT_ROLE) {
    return userAdministrationApi.getUserInformation(data.token).then(userInfo => {
      data.isVersion2 = userInfo.isVersion2;
      return data;
    });
  }

  return data;
};
