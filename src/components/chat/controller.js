const store = require('./store');

function getChats() {
    return new Promise((resolve, reject) => {
        return store.getChats().then(resolve).catch(reject);
    });
}

function addChat(users) {
    return new Promise((resolve, reject) => {
        if(users.length === 0) {
            console.error('Invalid data');
            return reject('The data cannot be empty');
        }
        return store.addChat({users}).then(resolve).catch(reject);
    });
}

function deleteChat(id) {
    return new Promise((resolve, reject) => {
        if(!id) {
            console.error('You must send an id');
            return reject('The id cannot be empty');
        }
        return store.deleteChat(id).then(resolve).catch(reject);
    });
}

module.exports = { getChats, addChat, deleteChat }
