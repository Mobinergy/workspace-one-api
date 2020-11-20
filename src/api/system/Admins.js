let base = require('./../../mixins/Base');
let adminsBase = require('./../../mixins/AdminsBase');
let pick = require('lodash/pick.js');

function Admins(options) {
    this.name = 'admins';
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(Admins.prototype, adminsBase);
Object.assign(Admins.prototype, pick(base, ['listAll']));

module.exports = Admins;
