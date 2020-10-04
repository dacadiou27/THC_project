const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());//The request data and their response data will be formated in JSON form

module.exports = function () {

  app.post('/logout', function (req, res) {
    console.log("Goodbye " + userSession + "!")
    userSession = "";
    projectSession = "";
    res.redirect('/html/index.html');
  });

  return app;
};


//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});
