const express = require('express');

const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/app', express.static('public'));
    router.use('/message', message);
    router.use('/user', user);
    router.use('/chat', chat);
}

module.exports = routerApi;
