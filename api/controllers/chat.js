'use strict';

const _ = require('lodash'),
    mongoose = require('mongoose'),
    Chat = mongoose.model('Chat');

exports.createMessage = function(req, res) {
    let body = _.pick(req.body, ['email', 'text']);
    let message = new Chat(body);

    message.save().then((r) => {
        res.send(r);
    }).catch(e => {
        res.status(400).send(e.message);
    });
}

exports.getMessageById = function(req, res) {
    let id = req.params.id || '';

    Chat.findById(id).then((message) => {
        res.send(message);
    }).catch(e => {
        res.status(400).send(e.message);
    });
}

exports.getMessages = function(req, res) {
    let page = parseInt(req.params.page);

    if (isNaN(page)) {
        res.status(400).send("Page canbe only nambers");
    } else {
        Chat.find().limit(10).skip(page * 10).then((messages) => {
            res.send(messages);
        }).catch(e => {
            res.status(400).send(e);
        })
    }
}