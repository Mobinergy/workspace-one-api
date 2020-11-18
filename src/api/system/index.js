module.exports = (options) => {
    options.url += 'API/system/';

    let Users = require('./Users');
    let users = new Users(options);

    return {
        users
    }
};
