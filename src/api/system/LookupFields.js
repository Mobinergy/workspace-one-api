let lookupFieldsBase = require('./../../mixins/LookupFieldsBase');

function LookupFields(options) {
    this.name = 'lookup-value';
    this.url = options.url;
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(LookupFields.prototype, lookupFieldsBase);


module.exports = LookupFields;
