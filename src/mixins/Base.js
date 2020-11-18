const axios = require('axios');

const base = {

    async listAll() {
        this.options.url += 'search';
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },

    async listById(id) {
        this.options.url += id;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },

    async listByUuid(uuid) {
        this.options.url += uuid;
        this.options.method = 'GET';
        this.options.headers.Accept += 'version=2';

        let response = await axios(this.options);
        return response.data;
    },

    async deleteById(id) {
        this.options.url += `${id}/delete`;
        this.options.method = 'DELETE';

        let response = await axios(this.options);
        return response.data;
    },

    async deleteByUuid(uuid) {
        this.options.url += uuid;
        this.options.method = 'DELETE';
        this.options.headers.Accept += 'version=2';

        let response = await axios(this.options);
        return response.data;
    },

    async create(body) {
        this.options.method = 'POST';
        this.options.headers.Accept += 'version=2';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async updateByUuid(uuid, body) {
        this.options.url += uuid;
        this.options.method = 'PUT';
        this.options.headers.Accept += 'version=2';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async updateById(id, body) {
        this.options.url += `${id}/update`;
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async activateById(id) {
        this.options.url += `${id}/activate`;
        this.options.method = 'POST';

        let response = await axios(this.options);
        return response.data;
    },

    async deactivateById(id) {
        this.options.url += `${id}/deactivate`;
        this.options.method = 'POST';

        let response = await axios(this.options);
        return response.data;
    },

    async changeLocationGroup(id, targetLGId) {
        this.options.url += `${id}/changelocationgroup?targetLG=${targetLGId}`;
        this.options.method = 'POST';

        let response = await axios(this.options);
        return response.data;
    },

    async bulkActivate(body) {
        this.options.url += 'activate';
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async bulkDeactivate(body) {
        this.options.url += 'deactivate';
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async bulkDelete(body) {
        this.options.url += 'delete';
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async uploadSMimeCerts(id, body) {
        this.options.url += `${id}/uploadsmimecerts`;
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = base;
