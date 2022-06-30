const db = require('mongoose');

const { config } = require('../config');

db.Promise = global.Promise;

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

function connect() {
    return new Promise((resolve, reject) => {
        db.connect(URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('DB connected');
            resolve();
        }).catch((error) => {
            console.error('DB ERROR', error);
            reject();
        });
    });
}

module.exports = { connect };
