const express = require('express');

const response = require('../../network/response');

const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    controller.getMessages().then((data) => {
        response.success(req, res, 'Messages List', data);
    }).catch((error) => {
        response.error(req, res, 'Error', error);
    });
});

router.post('/', (req, res) => {
    const { user, message } = req.body;
    controller.addMessage(user, message).then((data) => {
        response.success(req, res, 'Created', data, 201);
    }).catch((error) => {
        response.error(req, res, 'Error', error, 400);
    });
})

module.exports = router;
