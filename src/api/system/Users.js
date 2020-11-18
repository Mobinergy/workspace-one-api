let usersBase = require('./../../mixins/UsersBase');

function Users(options) {
    options.url += 'users/';

    this.options = options;
}

Object.assign(Users.prototype, usersBase);

module.exports = Users;
