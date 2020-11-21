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
    },

    async createPinnedHost(body) {
        this.options.url += `pinnedhost`;
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async updatePinnedHostByGuid(guid, body) {
        this.options.url += `pinnedhost/${guid}`;
        this.options.method = 'PATCH';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async deletePinnedHostByGuid(guid) {
        this.options.url += `pinnedhost/${guid}`;
        this.options.method = 'DELETE';

        let response = await axios(this.options);
        return response.data;
    },

    async pinCertificate(body) {
        this.options.url += `pincertificate`;
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async unpinCertificate(body) {
        this.options.url += `unpincertificate`;
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async enable(ogId) {
        this.options.url += `enable/${ogId}`;
        this.options.method = 'POST';

        let response = await axios(this.options);
        return response.data;
    },

    async disable(ogId) {
        this.options.url += `disable/${ogId}`;
        this.options.method = 'POST';

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = sslPinningBase;
