const express = require('express');

const db = require('./db');

const routerApi = require('./src/network/routes');

const port = 3000;
const app = express();

app.use(express.json());

routerApi(app);

app.listen(port, () => {
    db.connect().then(() => {console.log('Listening at: http://localhost:' + port)});
});
