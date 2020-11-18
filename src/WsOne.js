'use strict';
const generateAuthorization = require('./utils/generateAuthorization');
const fs = require('fs');
const path = require('path');
const camelCase = require('lodash/camelCase');

class WsOne {

    constructor(config) {

        if (config.apiHost && config.username && config.password && config.apiKey) {

            this.options = {
                headers: {
                    Authorization: generateAuthorization(config.username, config.password),
                    'aw-tenant-code': config.apiKey,
                    Accept: 'application/json;',
                }
            };

            this.system = {};

            fs.readdirSync(path.join(__dirname, 'api/system')).forEach(name => {
                let prop = camelCase(name.slice(0, -3));
                let Resource = require(`./api/system/${name}`);
                this.system[prop] = new(Resource)({
                    url: `https://${config.apiHost}/API/system/`,
                    ...this.options
                });
            });

        } else {
            console.log('Oops! there is something wrong with the config.');
        }
    }
}

module.exports = WsOne;
