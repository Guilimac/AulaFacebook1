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

const chats = [];

botly.on("message", (senderId, message, data) => {
    let text = `echo: ${data.text}`;

    botly.getUserProfile(senderId, function(err, info) {
        let status = require('./arvore_1');
        let chat;
        console.log(chats);
        for (var i = 0; i < chats.length; i++) {
            if (chats[i].senderId === senderId) {
                chat = chats[i];
            }
        }
        if (!chat) {
            chat = {
                senderId: senderId,
                firstName: info.first_name,
                lastName: info.last_name,
                picture: info.profile_pic,
                status: 'arvore_1|hello|start'
            };
            chats.push(chat);
        }
        console.log(chats);
        status.reply(chat.status, chat, botly, data);
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