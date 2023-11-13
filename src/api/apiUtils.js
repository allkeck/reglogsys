const apiConfig = {
  usersTableName: 'users',
};

const getLocalUsers = () => {
  return localStorage.getItem(apiConfig.usersTableName);
};

const LocalStorageUtils = {
  userData: {},

  users: { ...JSON.parse(getLocalUsers()) },

  saveUser: function (users) {
    localStorage.setItem(apiConfig.usersTableName, JSON.stringify(users));
  },

  validateUserCredentials: function () {
    return this.users[this.userData.login].password === this.userData.password;
  },

  isUserAlreadyExist: function (login) {
    const users = JSON.parse(getLocalUsers());

    if (users) {
      return Boolean(users[login || this.userData.login]);
    }
  },

  setUserData: function (userData) {
    this.userData = userData;
  },

  regUser: function ({ login, password }) {
    this.users[login] = { login, password };

    this.saveUser(this.users);

    return { status: 'success', operation: 'reg', data: this.users };
  },

  authUser: function () {
    if (this.validateUserCredentials()) {
      return { status: 'success', operation: 'auth', data: this.users };
    } else {
      return { status: 'error', errorCode: 403, errorMessage: 'Неверный пароль', operation: 'auth', data: this.users };
    }
  },
};

export const apiUtils = LocalStorageUtils;
