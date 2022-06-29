const express = require('express');

const routerApi = require('./src/network/routes');

const port = 3000;
const app = express();

app.use(express.json());

routerApi(app);

//app.get('/', express.static('public'));

app.listen(port, () => {
    console.log('Listening at: http://localhost:' + port);
});
