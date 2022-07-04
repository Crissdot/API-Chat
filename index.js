const express = require('express');
const { config } = require('./config');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const socketIO = require('./lib/socket');
const db = require('./db');
const routerApi = require('./src/network/routes');

app.use(cors());

app.use(express.json());

socketIO.connect(server);
routerApi(app);

server.listen(config.port, () => {
    db.connect().then(() => {console.log(`Listening at: ${config.host}:${config.port}`)});
});
