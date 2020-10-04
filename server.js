const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
//const path = require('path');
//const sql = require('mssql');
//const config = require('./config.js');
//const api = require('./api.js');

//app.use(app.router);
//router.initialize(app);

var userSession = "";
var projectSession = "";

app.use('/', require('./api')());
app.use('/', require('./newAccount')());
app.use('/', require('./accountSetting')());
app.use('/', require('./welcomePage')());
app.use('/', require('./newProject')());
app.use('/', require('./Tool1')());
app.use('/', require('./Tool2')());
app.use('/', require('./Tool3')());
app.use('/', require('./Tool4')());
app.use('/', require('./Tool5')());
app.use('/', require('./Tool6')());
app.use('/', require('./Tool8')());
app.use('/', require('./Tool9')());
app.use('/', require('./Logout')());

var server = app.listen(5000, function () {
    console.log('Server is running..');
});



