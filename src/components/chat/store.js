const Model = require('./model');

async function getChats() {
    const chats = await Model.find();
    return new Promise((resolve, reject) => {
        if(chats.length === 0) return reject('Chat not found');
        return resolve(chats);
    });
}

async function addChat(users) {
    const chat = new Model(users);
    const newChat = await chat.save();
    return newChat;
}

async function deleteChat(id) {
    const deletedChat = await Model.findByIdAndDelete(id);
    return new Promise((resolve, reject) => {
        if(deletedChat === null) return reject('Chat not found');
        return resolve(deletedChat);
    });
}

module.exports = { getChats, addChat, deleteChat };
