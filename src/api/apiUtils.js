const apiConfig = {
  usersTableName: 'users',
};

const LocalStorageUtils = {
  userData: {},

  saveUser: function (users) {
    localStorage.setItem(apiConfig.usersTableName, JSON.stringify(users));
  },

  validateUserCredentials: function (users) {
    return users[this.userData.login].password === this.userData.password;
  },

  isUserAlreadyExist: function (login) {
    const users = JSON.parse(this.getLocalUsers());

    if (users) {
      return users[login || this.userData.login];
    }
  },

  getLocalUsers: function () {
    return localStorage.getItem(apiConfig.usersTableName);
  },

  createUser: function ({ login, password }) {
    let users = {};

    this.userData = { login, password };

    if (this.getLocalUsers()) {
      users = {...JSON.parse(this.getLocalUsers())};
    }

    if (this.isUserAlreadyExist()) {
      if (this.validateUserCredentials(users)) {
        return { status: 'success', data: users };
      } else {
        return { status: 'error', errorCode: 403, errorMessage: 'Неверный пароль', data: users };
      }
    } else {
      users[login] = { login, password };

      this.saveUser(users);

      return { status: 'success', data: users };
    }
  },
};

export const apiUtils = LocalStorageUtils;
