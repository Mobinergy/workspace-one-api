'use strict';
const api = require('./api');
const generateAuthorization = require('./utils/generateAuthorization');

class WsOne {

    constructor(config) {

        if (config.username && config.password && config.apiKey) {

            api({
                headers: {
                    Authorization: generateAuthorization(config.username, config.password),
                    'aw-tenant-code': config.apiKey,
                    Accept: 'application/json;',
                }
            })
        } else {
            console.log('Oops! there is something wrong with the config.');
        }
    }

    async listAllProjects() {

    }
}

module.exports = WsOne;
