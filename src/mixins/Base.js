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

        this.options.url += this.name === 'notifications' ? `${query}` : `search${query}`;
        this.options.method = 'GET';

        if (this.name === 'groups') {
            this.options.headers.Accept = 'application/json;version=2';
        } else {
            this.options.headers.Accept = 'application/json;';
        }

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
        this.options.url += this.name === 'groups' ? `${id}` : `${id}/delete`;
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

    async create(config) {
        this.options.method = 'POST';
        this.options.data = config;

        if (this.name === 'expresslicenses') {
            this.options.headers.Accept = 'application/json;';
        } else {
            this.options.headers.Accept = 'application/json;version=2';
        }

        let response = await axios(this.options);
        return response.data;
    },

    async updateByUuid(uuid, config) {
        this.options.url += uuid;
        this.options.method = 'PUT';
        this.options.headers.Accept += 'version=2';
        this.options.data = config;

        let response = await axios(this.options);
        return response.data;
    },

    async updateById(id, config) {
        this.options.url += this.name === 'groups' ? `${id}` : `${id}/update`;
        this.options.method = this.name === 'groups' ? 'PUT' : 'POST';
        this.options.data = config;

        let response = await axios(this.options);
        return response.data;
    },

    async getInfo(version) {
        this.options.method = 'GET';
        this.options.headers.Accept += `version=${version ? version: '1'}`;

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = base;
