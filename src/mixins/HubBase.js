const axios = require('axios');
const _ = require('lodash');

const hubBase = {

    async updateConfig(config) {
        this.options.url += `hubservicesurl`;
        this.options.method = 'POST';
        this.options.data = config;

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = hubBase;
