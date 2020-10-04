const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const sql = require("mssql");
const config = require('./configRT');

app.use(bodyParser.urlencoded({ extended: false }));

//app.use(bodyParser.json());//The request data and ther response data will be formated in JSON form


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/NewAccount.html'));
});


app.post('/newAccount', function (req, res) {

  // connect to your database
  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var sqlRequest = new sql.Request();

    ////////

    let fname = req.body.fname;
    let lname = req.body.lname;
    let username = req.body.username;
    let pwd = req.body.pwd;
    let cpwd = req.body.cpwd;
    let email = req.body.email;
    let organization = req.body.organization;
    let orgtype = req.body.orgtype;

    //////
    //let sqlQuery = " INSERT INTO dbo.Users (UserName, FirstName, LastName, UserPassword, Email, OrgName, OrgType) VALUES ('" + username + "', '" + fname +"');";
    let sqlQuery = " INSERT INTO dbo.Users (UserName, FirstName, LastName, UserPassword, Email, OrgName, OrgType) VALUES ('" + username + "', '" + fname + "', '" + lname + "', '" + pwd + "', '" + email + "', '" + organization + "', '"+ orgtype + "');";
    

    console.log(sqlQuery);
    //to remove in production version if not I will expose the password of the user
    sqlRequest.query(sqlQuery, function (err, data) {
      if (err) console.log(err)
      console.log(data);

      if (data) { res.redirect('/html/WelcomePage.html') } // DO NOT WORK issue in the redirect
      else {
        res.send('Incorrect Input!');
      } res.end();

      sql.close();
    });
  });
});


var server = app.listen(5000, function () {
  console.log('Server is running..');
});

//node index.js