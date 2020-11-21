let sslPinningBase = require('./../../mixins/SslPinningBase');
let pick = require('lodash/pick.js');

function SslPinning(options) {
    this.name = 'sslpinning';
    this.url = options.url;
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(SslPinning.prototype, sslPinningBase);

module.exports = SslPinning;
