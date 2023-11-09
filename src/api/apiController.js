import { apiUtils } from './apiUtils';

export const reglogsysAPI = {
  checkUserLogin: function (userLogin) {
    return apiUtils.isUserAlreadyExist(userLogin);
  },
  reg: function (userData) {
    const credentials = { login: userData[0].value, password: userData[1].value };

    return apiUtils.createUser(credentials);
  },
};
