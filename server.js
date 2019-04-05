'use strict';
require('./db/mondoose');
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    Chat = require('./api/models/chat.model'),
    router = require('./api/router/chat.router'),
    bodyParser = require('body-parser');;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

app.use('/', (req, res) => {
    res.send("Api work...");
});

app.listen(port, () => {
    console.log(`Server running on ${port}...`);
});

