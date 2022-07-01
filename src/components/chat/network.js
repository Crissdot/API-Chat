const express = require('express');

const response = require('../../network/response');

const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    controller.getChats().then((data) => {
        response.success(req, res, 'Chat List', data);
    }).catch((error) => {
        response.error(req, res, 'Error', error, 404);
    });
});

router.post('/', (req, res) => {
    const { users } = req.body;
    controller.addChat(users).then((data) => {
        response.success(req, res, 'Created', data, 201);
    }).catch((error) => {
        response.error(req, res, 'Error', error, 400);
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    controller.deleteChat(id).then((data) => {
        response.success(req, res, 'Deleted', data);
    }).catch((error) => {
        response.error(req, res, 'Error', error, 400);
    });
});

module.exports = router;
