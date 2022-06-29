const express = require('express');

const message = require('../components/message/network');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/message', message);
}

module.exports = routerApi;
