const axios = require('axios');
const _ = require('lodash');

const adminsBase = {

    async listAll(params) {
        let query = '';

        if (!_.isEmpty(params)) {
            query = '?'
            _.forOwn(params, (value, key) => {
                query += `${key}=${value}&`;
            });

            query = query.slice(0, -1);
        }

        this.options.url += `search${query}`;
        this.options.method = 'GET';
        this.options.headers.Accept += 'version=2';

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = adminsBase;
