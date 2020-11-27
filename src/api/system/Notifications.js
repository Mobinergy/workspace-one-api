let base = require('./../../mixins/Base');
let notificationsBase = require('./../../mixins/NotificationsBase');
let pick = require('lodash/pick.js');

function Notifications(options) {
    this.name = 'notifications';
    this.url = options.url;
    options.url += `${this.name}/`;

    this.options = options;
}

Object.assign(Notifications.prototype, notificationsBase);
Object.assign(Notifications.prototype, pick(base, [
    'listAll'
]));

module.exports = Notifications;
