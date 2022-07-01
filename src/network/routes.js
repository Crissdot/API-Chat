const express = require('express');

const message = require('../components/message/network');
const user = require('../components/user/network');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/message', message);
    router.use('/user', user);
}

module.exports = routerApi;
