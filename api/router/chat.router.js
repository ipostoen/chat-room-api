'use strict';

const express = require('express'),
    router = express.Router(),
    chat = require('../controllers/chat');

router.route('/messages').post(chat.createMessage);
router.route('/messages/list/:page').get(chat.getMessages);
router.route('/messages/single/:id').get(chat.getMessageById);

module.exports = router;
