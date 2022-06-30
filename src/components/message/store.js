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

async function getMessages(filterUser) {
    const filter = {}
    if(filterUser !== null) filter.user = filterUser;
    const messages = await Model.find(filter);
    return new Promise((resolve, reject) => {
        if(messages.length === 0) return reject('User not found');
        return resolve(messages);
    });
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

async function deleteMessage(id) {
    const deletedMessage = await Model.findByIdAndDelete(id);
    return new Promise((resolve, reject) => {
        if(deletedMessage === null) return reject('User not found');
        return resolve(deletedMessage);
    });
}

module.exports = { getMessages, addMessage, updateMessage, deleteMessage };
