const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', express.static('public'));

app.listen(port, () => {
    console.log('Listening at: http://localhost:' + port);
});
