const store = require('./store');

function getUsers(filterUser) {
    return new Promise((resolve, reject) => {
        return store.getUsers(filterUser).then(resolve).catch(reject);
    });
}

function addUser(name) {
    return new Promise((resolve, reject) => {
        if(!name) {
            console.error('Invalid data');
            return reject('The username cannot be empty');
        }
        const user = {
            name,
        };
        return store.addUser(user).then(resolve).catch(reject);
    });
}

function updateUser(id, name) {
    return new Promise((resolve, reject) => {
        if(!id || !name) {
            console.error('Invalid data');
            return reject('The data cannot be empty');
        }
        return store.updateUser(id, name).then(resolve).catch(reject);
    });
}

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        if(!id) {
            console.error('You must send an id');
            return reject('The id cannot be empty');
        }
        return store.deleteUser(id).then(resolve).catch(reject);
    });
}

module.exports = { getUsers, addUser, updateUser, deleteUser }
