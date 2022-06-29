const express = require('express');

const response = require('../../network/response');

const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({
        'custom-header': 'This is a custom header',
    });
    response.success(req, res, 'Messages List');
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
