let base = require('./../../mixins/Base');
let userGroupsBase = require('./../../mixins/UserGroupsBase');
let pick = require('lodash/pick.js');

function UserGroups(options) {
    this.name = 'usergroups';
    this.url = options.url;
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(UserGroups.prototype, userGroupsBase);
Object.assign(UserGroups.prototype, pick(base, [
    'listAll', 'deleteById'
]));

module.exports = UserGroups;
