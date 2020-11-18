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

    async delete(id) {
        this.options.url += `${id}/delete`;
        this.options.method = 'DELETE';

        let response = await axios(this.options);
        return response.data;
    }
};

module.exports = base;
