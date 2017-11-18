require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const botly = require('botly');
const config = require('./config');


let app = express();

app.get('/', (req, res) => {
    res.send('oi');
});

app.listen(config.port, () => {
    console.log(`api ativa na porta: ${config.port}`);
});