const store = require('./store');

function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        return store.getMessages(filterChat).then(resolve).catch(reject);
    });
}

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if(!chat || !user || !message) {
            console.error('Invalid data');
            return reject('The data cannot be empty');
        }

        let fileUrl = '';
        if(file) {
            fileUrl = 'http://localhost:3000/api/v1/app/files/' + file.filename;
        }

        const fullMessage = {
            chat,
            user,
            message,
            date: new Date(),
            file: fileUrl,
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

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if(!id) {
            console.error('You must send an id');
            return reject('The id cannot be empty');
        }
        return store.deleteMessage(id).then(resolve).catch(reject);
    });
}

module.exports = { getMessages, addMessage, updateMessage, deleteMessage }
