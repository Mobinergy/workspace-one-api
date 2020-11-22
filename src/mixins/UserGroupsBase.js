const axios = require('axios');
const _ = require('lodash');

const userGroupsBase = {

    async listByName(groupName, params) {
        let query = '';

        if (groupName) {
            query = `?groupname=${groupName}`

            if (!_.isEmpty(params)) {
                _.forOwn(params, (value, key) => {
                    query += `&${key}=${value}`;
                });
            }
        }

        this.options.url += `custom/search${query}`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = userGroupsBase;
