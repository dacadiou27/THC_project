const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/public/html')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());//The request data and their response data will be formated in JSON form

module.exports = function () {

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/NewAccount.html'));
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

      let sqlQuery = " INSERT INTO dbo.Users (UserName, FirstName, LastName, UserPassword, Email, OrgName, OrgType) VALUES ('" + username + "', '" + fname + "', '" + lname + "', '" + pwd + "', '" + email + "', '" + organization + "', '" + orgtype + "');";
      //console.log(sqlQuery);
      //to remove in production version if not I will expose the password of the user
      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        //console.log(data);

        if (data) { 
          userSession = username;
          res.redirect('/html/WelcomePage.html');
         }
        else {
          res.send('Username / email address already in use or Incorrect Input!');
        } res.end();

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