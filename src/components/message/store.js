const db = require('mongoose');
const Model = require('./model');

const { config } = require('../../../config');

db.Promise = global.Promise;

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

db.connect(URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB connected');
}).catch((error) => {
    console.error('DB ERROR', error);
});

async function getMessages() {
    const messages = await Model.find();
    return messages;
}

async function addMessage(message) {
    const myMessages = new Model(message);
    const newMessage = await myMessages.save();
    return newMessage;
}

async function updateMessage(id, message) {
    const updatedMessage = await Model.findById(id);
    updatedMessage.message = message;
    await updatedMessage.save();
    return updatedMessage;
}

module.exports = { getMessages, addMessage, updateMessage };
