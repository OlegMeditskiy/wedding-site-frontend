const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8909;
const wakeUpDyno = require("wokeDyno.js");

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();
const DYNO_URL = "http://daria-alexander-wedding.herokuapp.com/";
app.use(favicon(__dirname + '/build/favicon.ico'));

//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

//простой тест сервера
app.get('/ping', function (req, res) {
    return res.send('pong');
});

//обслуживание html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port,()=>{
    wakeUpDyno(DYNO_URL);
});
