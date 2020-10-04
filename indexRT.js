const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const sql = require("mssql");
const config = require('./configRT');


app.use(bodyParser.urlencoded({ extended: false }));

//app.use(bodyParser.json());//The request data and ther response data will be formated in JSON form

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/LoginPage.html'));
});

//app.get('/', function (req, res) {
//  res.send('<h1>Hello Node Web Server</h1>');
//});


app.post('/auth', function (req, res) {

  // connect to your database
  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var sqlRequest = new sql.Request();

    ////////
   
    let username = req.body.username;
    let pwd = req.body.pswd;
    //let pwd = req.body.pwd;
    //console.log(username);
    console.log(pwd + " from HTML");
    //////
    let sqlQuery = "SELECT UserPassword FROM dbo.Users WHERE UserName = '" + username + "';";
    console.log(sqlQuery);
    //to remove in production version if not I will expose the password of the user
    sqlRequest.query(sqlQuery, function (err, data) {
      if (err) console.log(err)
      console.log(data);
      console.log(data.recordset[0].UserPassword + " from SQL");
      //console.log(data.rowAffected);


      if (data.recordset[0].UserPassword == pwd) { res.redirect('/WelcomePage.html') } // DO NOT WORK issue in the redirect
      else {
        res.send('Incorrect Username and/or Password!');
      } res.end();

      // send records as a response
      // res.send(data);

      sql.close();
    });
  });
});

var server = app.listen(5000, function () {
  console.log('Server is running..');
});

//node index.js