const express = require('express');

const response = require('../../network/response');

const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    const filterMessages = req.query.user || null;

    controller.getMessages(filterMessages).then((data) => {
        response.success(req, res, 'Messages List', data);
    }).catch((error) => {
        response.error(req, res, 'Error', error, 404);
    });
});

router.post('/', (req, res) => {
    const { user, message } = req.body;
    controller.addMessage(user, message).then((data) => {
        response.success(req, res, 'Created', data, 201);
    }).catch((error) => {
        response.error(req, res, 'Error', error, 400);
    });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    controller.updateMessage(id, message).then((data) => {
        response.success(req, res, 'Updated', data);
    }).catch((error) => {
        response.error(req, res, 'Error', error, 400);
    });
});

module.exports = router;
