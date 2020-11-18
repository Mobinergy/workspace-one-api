let base = require('./../../mixins/Base');

function Users(options) {
    options.url += 'users/';

    this.options = options;
}

Object.assign(Users.prototype, base);

module.exports = Users;
