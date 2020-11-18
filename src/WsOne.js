'use strict';
const generateAuthorization = require('./utils/generateAuthorization');

class WsOne {

    constructor(config) {

        if (config.apiHost && config.username && config.password && config.apiKey) {

            this.options = {
                url: `https://${config.apiHost}/`,
                headers: {
                    Authorization: generateAuthorization(config.username, config.password),
                    'aw-tenant-code': config.apiKey,
                    Accept: 'application/json;',
                }
            };

            this.system = require('./api/system')(this.options);

        } else {
            console.log('Oops! there is something wrong with the config.');
        }
    }
}

module.exports = WsOne;
