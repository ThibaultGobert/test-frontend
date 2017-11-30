import * as roles from '../../constants/roles';
import userAdministrationApi from '../userAdministration';

export default (data) => {
  if (data.role === roles.STUDENT_ROLE) {
    debugger;
    return userAdministrationApi.getUserInformation(data.token).then(userInfo => {
      data.isVersion2 = userInfo.isVersion2;
      return data;
    }).catch(error => {
      debugger;
    });
  }

  return data;
};
