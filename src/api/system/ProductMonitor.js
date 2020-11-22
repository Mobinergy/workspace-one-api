let productMonitorBase = require('./../../mixins/ProductMonitorBase');

function ProductMonitor(options) {
    this.name = 'productmonitor';
    this.url = options.url;
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(ProductMonitor.prototype, productMonitorBase);

module.exports = ProductMonitor;
