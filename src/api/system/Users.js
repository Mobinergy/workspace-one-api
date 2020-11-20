let base = require('./../../mixins/Base');
let usersBase = require('./../../mixins/UsersBase');
let pick = require('lodash/pick.js');

function Users(options) {
    this.name = 'users';
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(Users.prototype, usersBase);
Object.assign(Users.prototype, pick(base, [
    'listAll', 'listById', 'listByUuid', 'deleteById', 'deleteByUuid', 'create', 'updateByUuid', 'updateById'
]));

module.exports = Users;
