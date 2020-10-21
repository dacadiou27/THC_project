const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
//const path = require('path');
//const sql = require('mssql');
//const config = require('./config.js');
//const api = require('./api.js');

//app.use(app.router);
//router.initialize(app);

//var userSession = "";
//var projectName = "projectU1";

global.userSession ="";
global.projectName ="projectU1";
//global.projectName ="";
/*
app.use('/', require('./public/api')());
app.use('/', require('./public/newAccount')());
app.use('/', require('./public/accountSetting')());
app.use('/', require('./public/welcomePage')());
app.use('/', require('./public/newProject')());
app.use('/', require('./public/Tool1')());
app.use('/', require('./public/Tool2')());
app.use('/', require('./public/Tool3')());
app.use('/', require('./public/Tool4')());
app.use('/', require('./public/Tool5')());
app.use('/', require('./public/Tool6')());
app.use('/', require('./public/Tool8')());
app.use('/', require('./public/Tool9')());
app.use('/', require('./public/Logout')());
*/

app.use('/', require('./api')());
app.use('/', require('./newAccount')());
app.use('/', require('./accountSetting')());
app.use('/', require('./welcomePage')());
app.use('/', require('./newProject')());
app.use('/', require('./ToolsPage')());
app.use('/', require('./Tool1')());
app.use('/', require('./Tool2')());
app.use('/', require('./Tool3')());
app.use('/', require('./Tool4')());
app.use('/', require('./Tool5')());
app.use('/', require('./Tool6')());
app.use('/', require('./Tool7')());
app.use('/', require('./Tool8')());
app.use('/', require('./Tool9')());
app.use('/', require('./Logout')());
app.use('/', require('./viewDoc')());

var server = app.listen(5000, function () {
    console.log('Server is running..');
});



