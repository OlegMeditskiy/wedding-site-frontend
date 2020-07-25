const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8909;
const wakeDyno = require("woke-dyno");
const DYNO_URL = "https://daria-alexander-wedding.herokuapp.com/";
const DYNO_URL2 = "https://daria-alexander-backend.herokuapp.com/api/admin/get/personalInvitations";
// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));

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
    wakeDyno({
        url:DYNO_URL,
        interval:300000
    }).start();
    wakeDyno({
        url:DYNO_URL2,
        interval:300000
    }).start();
});
