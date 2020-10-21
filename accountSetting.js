const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/public/html')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());//The request data and ther response data will be formated in JSON form

module.exports = function () {

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/UserSetting.html'));
  });

  app.post('/emailUpdate', function (req, res) {
    console.log("Welcome " + userSession + " from Account Setting Page!")
    // connect to your database
    sql.connect(config, function (err) {

      if (err) console.log(err);
      // create Request object
      var sqlRequest = new sql.Request();

      let oldEmail = req.body.oldEmail;
      let newEmail = req.body.newEmail;

      let sqlQuery = "UPDATE dbo.Users SET Email = '" + newEmail + "' WHERE Email = '" + oldEmail + "' ;";

      //console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        //console.log(data);

        if (data) { res.redirect('/html/WelcomePage.html') }
        else {
          res.send('Incorrect Input!');
        } res.end();

        sql.close();
      });
    });
  });


  app.post('/pwdUpdate', function (req, res) {

    // connect to your database
    sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var sqlRequest = new sql.Request();

      let npwd = req.body.npwd;
      let opwd = req.body.opwd;
      //let cpwd = req.body.cpwd;

      let sqlQuery = "UPDATE dbo.Users SET UserPassword = '" + npwd + "' WHERE UserPassword = '" + opwd + "' ;";
      //UPDATE dbo.Users SET UserPassword = 'pwd1other' WHERE UserPassword = 'undefined' ; DO NOT WORK due to old pasword is not capture
      //console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        //console.log(data);

        if (data) { res.redirect('/html/WelcomePage.html') }
        else {
          res.send('Incorrect Input!');
        } res.end();

        sql.close();
      });
    });
  });

  return app;
};

//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});

//node accountSetting.js