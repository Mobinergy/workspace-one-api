const axios = require('axios');
const _ = require('lodash');

const notificationsBase = {

    async count() {
        this.options.url += 'count';
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },

    async dismiss(id) {
        this.options.url += id;
        this.options.method = 'POST';

        let response = await axios(this.options);
        return response.data;
    },
};

module.exports = notificationsBase;
