const axios = require('axios');
const _ = require('lodash');

const operationsBase = {

    async getStatus(operationUuid) {
        this.options.url += operationUuid;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = operationsBase;
