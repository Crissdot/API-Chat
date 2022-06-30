const store = require('./store');

function getMessages() {
    return new Promise((resolve, reject) => {
        return store.getMessages().then(resolve).catch(reject);
    });
}

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message) {
            console.error('Invalid data');
            return reject('The data cannot be empty');
        }
        const fullMessage = {
            user,
            message,
            date: new Date(),
        };
        return store.addMessage(fullMessage).then(resolve).catch(reject);
    });
}

function updateMessage(id, message) {
    return new Promise((resolve, reject) => {
        if(!id || !message) {
            console.error('Invalid data');
            return reject('The data cannot be empty');
        }
        return store.updateMessage(id, message).then(resolve).catch(reject);
    });
}

module.exports = { getMessages, addMessage, updateMessage }
