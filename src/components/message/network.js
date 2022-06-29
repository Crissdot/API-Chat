const express = require('express');

const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({
        'custom-header': 'This is a custom header',
    });
    response.success(req, res, 'Messages List');
});

router.post('/', (req, res) => {
    console.log(req.query);
    if(req.query.error === 'ok') {
        response.error(req, res, 'Error', "It's just a simulation", 500);
    } else {
        response.success(req, res, 'Created', 201);
    }
})

module.exports = router;
