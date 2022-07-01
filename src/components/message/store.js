const Model = require('./model');

function getMessages(filterUser) {
    const filter = {}
    if(filterUser !== null) filter.user = filterUser;
    return new Promise((resolve, reject) => {
        Model.find(filter).populate('user').exec((error, data) => {
            if(error) return reject(error);
            if(data.length === 0) return reject('User not found');

            return resolve(data);
        });
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
