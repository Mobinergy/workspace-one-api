let base = require('./../../mixins/Base');
let pick = require('lodash/pick.js');

function ExpressLicense(options) {
    this.name = 'expresslicenses';
    this.url = options.url;
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(ExpressLicense.prototype, pick(base, [
    'create'
]));
module.exports = ExpressLicense;
