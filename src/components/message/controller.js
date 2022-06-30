const store = require('./store');

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.getMessages());
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
        return resolve(store.addMessage(fullMessage));
    });
}

module.exports = { getMessages, addMessage }
