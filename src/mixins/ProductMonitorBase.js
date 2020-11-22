const axios = require('axios');
const _ = require('lodash');

const productMonitorBase = {

    async getApps(params) {
        return get(this,'apps', params);
    },

    async getProfiles(params) {
        return get(this, 'profiles', params);
    },

    async getDeploymentStatus(uuid, productType) {
        let query = '';

        if (productType) {
            query = `?producttype=${productType}`;
        }
        this.options.url += `products/${uuid}/deploymentstatus${query}`;
        this.options.method = 'GET';

        let response = await axios(this.options);
        return response.data;
    },
};

async function get(self, name, params) {
    let query = '';

    if (!_.isEmpty(params)) {
        query = '?';
        _.forOwn(params, (value, key) => {
            query += `${key}=${value}&`;
        });

        query = query.slice(0, -1);
    }

    self.options.url += `${name}/search${query}`;
    self.options.method = 'GET';

    let response = await axios(self.options);
    return response.data;
}

module.exports = productMonitorBase;
