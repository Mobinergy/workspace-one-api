let operationsBase = require('./../../mixins/OperationsBase');

function Operations(options) {
    this.name = 'operations';
    this.url = options.url;
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(Operations.prototype, operationsBase);

module.exports = Operations;
