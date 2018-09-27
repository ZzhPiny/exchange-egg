'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + 'exchange-spider';

    // add your config here
    config.middleware = [];

    config.sequelize = {
        username: 'root',
        password: '',
        database: 'zhidesheng',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    };

    config.prePublishSite = {
        beijing: '',
    };

    return config;
};
