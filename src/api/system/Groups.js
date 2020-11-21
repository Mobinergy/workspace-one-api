let groupsBase = require('./../../mixins/GroupsBase');
let base = require('./../../mixins/Base');
let pick = require('lodash/pick.js');

function Groups(options) {
    this.name = 'groups';
    this.url = options.url;
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(Groups.prototype, groupsBase);
Object.assign(Groups.prototype, pick(base, [
    'listAll', 'listById', 'listByUuid', 'updateByUuid', 'updateById'
]));

module.exports = Groups;
