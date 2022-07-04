const express = require('express');
const port = 3000;
const app = express();
const server = require('http').Server(app);

const socketIO = require('./lib/socket');
const db = require('./db');
const routerApi = require('./src/network/routes');

app.use(express.json());

socketIO.connect(server);
routerApi(app);

server.listen(port, () => {
    db.connect().then(() => {console.log('Listening at: http://localhost:' + port)});
});
