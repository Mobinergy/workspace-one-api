const axios = require('axios');
const _ = require('lodash');

const base = {

    async listAll(params) {
        let query = '';

        if (!_.isEmpty(params)) {
            query = '?';
            _.forOwn(params, (value, key) => {
                query += `${key}=${value}&`;
            });

            query = query.slice(0, -1);
        }

        this.options.url += `search${query}`;
        this.options.method = 'GET';

        /*if (this.name === 'admins') {
            this.options.headers.Accept = 'application/json;version=2';
        } else {
            this.options.headers.Accept = 'application/json;';
        }*/

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
};

module.exports = base;
