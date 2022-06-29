const express = require('express');

const app = express();
const port = 3000;

app.use('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Listening at: http://localhost:' + port);
});
