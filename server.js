require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Botly = require('botly');
const config = require('./config');

const botly = new Botly({
    verifyToken: config.appSecret,
    accessToken: config.fbToken
});

botly.on("message", (senderId, message, data) => {
    let text = `echo: ${data.text}`;
    console.log(message);
    console.log(data);
    console.log(senderId);

    botly.getUserProfile(senderId, function(err, info) {
        if (data.text === 'oi') {
            botly.sendText({
                id: senderId,
                text: `oi ${info.first_name}`
            });
        } else {
            botly.sendText({
                id: senderId,
                text: text
            });
        }
    });
});

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/fb', botly.router());

app.get('/', (req, res) => {
    res.send('oi');
});

app.listen(config.port, () => {
    console.log(`api ativa na porta: ${config.port}`);
});