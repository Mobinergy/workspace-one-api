const axios = require('axios');
const _ = require('lodash');

const notificationsBase = {

    async getKeysByOgId(ogUuid) {
        this.options.url += `keys/${ogUuid}`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },

    async getKeysByValueType(ogUuid, valueType) {
        this.options.url += `keys/${ogUuid}/${valueType}`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = notificationsBase;
