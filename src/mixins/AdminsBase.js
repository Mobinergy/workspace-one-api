const axios = require('axios');
const _ = require('lodash');

const adminsBase = {

    async changePasswordById(id, body) {
        this.options.url += `${id}/changepassword`;
        this.options.method = 'POST';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },

    async changePasswordByUuid(uuid, body) {
        this.options.url += `${uuid}/password`;
        this.options.method = 'PUT';
        this.options.headers.Accept += 'version=2';
        this.options.data = body;

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = adminsBase;
