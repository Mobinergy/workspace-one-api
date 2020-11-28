let hubBase = require('./../../mixins/HubBase');

function Hub(options) {
    this.name = 'hubconfig';
    this.url = options.url;
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(Hub.prototype, hubBase);


module.exports = Hub;
