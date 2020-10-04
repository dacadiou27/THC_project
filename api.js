const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());//The request data and ther response data will be formated in JSON form

//var userSession = "";
//var projectSession = "";

module.exports = function () {

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
    //res.sendFile(path.join(__dirname + '/public/html/LoginPage.html'));
  });

  //app.get('/auth', function (req, res) { //for testing only
  app.post('/auth', function (req, res) {

    // connect to your database
    sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var sqlRequest = new sql.Request();

      let username = req.body.username;
      let pwd = req.body.pswd;

      //console.log(pwd + " from HTML");

      let sqlQuery = "SELECT UserPassword FROM dbo.Users WHERE UserName = '" + username + "';";
      //console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        //to remove in production version if not I will expose the password of the user 
        //console.log(data);
        //console.log(data.recordset[0].UserPassword + " from SQL");

        if (data.recordset[0].UserPassword == pwd) {
          res.redirect('/html/WelcomePage.html');
          userSession = username;
          console.log("Welcome " + userSession + " from login Page!")
        }
        else {
          res.send('Incorrect Username and/or Password!');
        } res.end();

        // send records as a response
        // res.send(data);

        sql.close();
      });
    });
  });

  return app;
};

//var server = app.listen(5000, function () {
 // console.log('Server is running..');
//});

//node index.js