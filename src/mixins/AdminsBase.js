const axios = require('axios');
const _ = require('lodash');

const adminsBase = {

    async changePasswordById(id, config) {
        this.options.url += `${id}/changepassword`;
        this.options.method = 'POST';
        this.options.data = config;

        let response = await axios(this.options);
        return response.data;
    },

    async changePasswordByUuid(uuid, config) {
        this.options.url += `${uuid}/password`;
        this.options.method = 'PUT';
        this.options.headers.Accept += 'version=2';
        this.options.data = config;

        let response = await axios(this.options);
        return response.data;
    },

    async addRoleById(id, config) {
        this.options.url += `${id}/addrole`;
        this.options.method = 'POST';
        this.options.data = config;

        let response = await axios(this.options);
        return response.data;
    },

    async addRoleByUuid(adminUuid, ogUuid, roleUuid) {
        this.options.url = `${this.url}groups/${ogUuid}/admins/${adminUuid}/roles/${roleUuid}`;
        this.options.method = 'PUT';
        this.options.headers.Accept += 'version=2';

        let response = await axios(this.options);
        return response.data;
    },

    async removeRoleById(id, config) {
        this.options.url += `${id}/removerole`;
        this.options.method = 'POST';
        this.options.data = config;

        let response = await axios(this.options);
        return response.data;
    },

    async removeRoleByUuid(adminUuid, ogUuid, roleUuid) {
        this.options.url = `${this.url}groups/${ogUuid}/admins/${adminUuid}/roles/${roleUuid}`;
        this.options.method = 'DELETE';
        this.options.headers.Accept += 'version=2';

        let response = await axios(this.options);
        return response.data;
    },

    async getConfigurationsAboutPage(id) {
        this.options.url += `${id}/configurationsaboutpage`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },

    async updateConfigurationsAboutPage(id, showPage) {
        this.options.url += `${id}/configurationsaboutpage/${showPage}`;
        this.options.method = 'POST';

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = adminsBase;
