const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'users',
    },
    message: String,
    date: Date,
    file: String,
});

const model = mongoose.model('messages', mySchema);

module.exports = model;
