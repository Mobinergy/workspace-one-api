const axios = require('axios');
const _ = require('lodash');

const usersBase = {

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

module.exports = usersBase;
