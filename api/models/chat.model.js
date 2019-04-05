'use strict';

const mongoose = require('mongoose');

let chatSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    text: {
        type: String,
        required: true,
        max: 100
    },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    updatedAt: {
        type: Number,
        default: Date.now()
    }
});

chatSchema.path('email').validate(function(email) {
    return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
}, "Email is not valid!");

module.exports = mongoose.model('Chat', chatSchema);