import { apiUtils } from './apiUtils';

export const reglogsysAPI = {
  checkUserLogin: function (userLogin) {
    return apiUtils.isUserAlreadyExist(userLogin);
  },

  reg: function (userData) {
    const credentials = { login: userData[0].value, password: userData[1].value };

    apiUtils.setUserData(credentials);

    return apiUtils.regUser(credentials);
  },

  auth: function (userData) {
    const credentials = { login: userData[0].value, password: userData[1].value };

    apiUtils.setUserData(credentials);

    return apiUtils.authUser();
  },
};
