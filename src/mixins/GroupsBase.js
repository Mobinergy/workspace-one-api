const axios = require('axios');
const _ = require('lodash');

const adminsBase = {

    async create(parentOgId, body) {
        this.options.url += parentOgId;
        this.options.method = 'POST';
        this.options.headers.Accept += 'version=2';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async getChildren(ogId) {
        this.options.url += `${ogId}/children`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },

    async deviceCounts(params) {
        let query = '';

        if (!_.isEmpty(params)) {
            query = '?';
            _.forOwn(params, (value, key) => {
                query += `${key}=${value}&`;
            });

            query = query.slice(0, -1);
        }

        this.options.url += `devicecounts${query}`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },

    async getSampleRates(ogId, platform) {
        this.options.url += `${ogId}/samplerates?platform=${platform}`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },

    async getTags(ogId) {
        this.options.url += `${ogId}/tags`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },

    async getTagDetails(ogId, tagId) {
        this.options.url += `${ogId}/tags/${tagId}`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },

    async deleteTag(ogId, tagId) {
        this.options.url += `${ogId}/tags/${tagId}`;
        this.options.method = 'DELETE';

        let response = await axios(this.options);
        return response.data;
    },

    async addTag(ogId, body) {
        this.options.url += `${ogId}/addTag`;
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async updateTag(ogId, tagId, body) {
        this.options.url += `${ogId}/tags/${tagId}/update`;
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async getCustomAttributes(ogId) {
        this.options.url += `${ogId}/customattributes`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = adminsBase;
