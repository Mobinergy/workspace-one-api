'use strict';

class WsOne {

    constructor(config) {

        if (config.username && config.password && config.apiKey) {
            console.log(config);
        } else {
            console.log('Oops! there is something wrong with the config.');
        }
    }

    async listAllProjects() {

    }
}

module.exports = WsOne;
