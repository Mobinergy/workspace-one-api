let adminsBase = require('./../../mixins/AdminsBase');

function Admins(options) {
    options.url += 'admins/';

    this.options = options;
}

Object.assign(Admins.prototype, adminsBase);

module.exports = Admins;
