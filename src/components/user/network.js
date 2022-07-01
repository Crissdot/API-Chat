const express = require('express');

const response = require('../../network/response');

const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    const filterUser = req.query.name || null;

    controller.getUsers(filterUser).then((data) => {
        response.success(req, res, 'Users List', data);
    }).catch((error) => {
        response.error(req, res, 'Error', error, 404);
    });
});

router.post('/', (req, res) => {
    const { name } = req.body;
    controller.addUser(name).then((data) => {
        response.success(req, res, 'Created', data, 201);
    }).catch((error) => {
        response.error(req, res, 'Error', error, 400);
    });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    controller.updateUser(id, name).then((data) => {
        response.success(req, res, 'Updated', data);
    }).catch((error) => {
        response.error(req, res, 'Error', error, 400);
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    controller.deleteUser(id).then((data) => {
        response.success(req, res, 'Deleted', data);
    }).catch((error) => {
        response.error(req, res, 'Error', error, 400);
    });
});

module.exports = router;
