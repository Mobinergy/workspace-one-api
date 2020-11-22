const axios = require('axios');
const _ = require('lodash');

const userGroupsBase = {

    async listByName(groupName, params) {
        let query = '';

        if (groupName) {
            query = `?groupname=${groupName}`;

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

    async getUsers(groupsId, params) {
        let query = '';

        if (!_.isEmpty(params)) {
            query += '?';

            _.forOwn(params, (value, key) => {
                query += `${key}=${value}&`;
            });

            query = query.slice(0, -1);
        }

        this.options.url += `${groupsId}/users${query}`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },

    async create(body) {
        this.options.url += `createcustomusergroup`;
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async addUser(groupId, userId) {
        this.options.url += `${groupId}/user/${userId}/addusertogroup`;
        this.options.method = 'POST';

        let response = await axios(this.options);
        return response.data;
    },

    async removeUser(groupId, userId) {
        this.options.url += `${groupId}/user/${userId}/removeuserfromgroup`;
        this.options.method = 'POST';

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = userGroupsBase;
