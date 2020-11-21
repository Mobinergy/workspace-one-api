const axios = require('axios');
const _ = require('lodash');

const sslPinningBase = {

    async getPinnedHosts(hostname, odId) {
        this.options.url += `pinnedhosts`;

        if (hostname) {
            this.options.url += `?hostName=${hostname}${odId ? '&organizationgroupid=' + odId : ''}`;
        }

        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    }
};

module.exports = sslPinningBase;
