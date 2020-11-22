let base = require('./../../mixins/Base');
let pick = require('lodash/pick.js');

function Info(options) {
    this.name = 'info';
    this.url = options.url;
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(Info.prototype, pick(base, [
    'getInfo'
]));

module.exports = Info;
