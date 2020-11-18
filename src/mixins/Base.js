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
    }
};

module.exports = base;
