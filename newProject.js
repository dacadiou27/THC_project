const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());//The request data and their response data will be formated in JSON form

module.exports = function () {

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/NewProject.html'));
  });

  app.post('/newProject', function (req, res) {
    console.log("Welcome " + userSession + " from NewProject Page!")
    // connect to your database
    sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var sqlRequest = new sql.Request();

      ////////
      //let userName = 'user1';
      let userName = userSession;
      let projectName = req.body.projectName;
      let org = req.body.org;
      let dateStarted = req.body.dateStarted;
      let email = req.body.email;
      //////

      let sqlQuery = " INSERT INTO dbo.Projects (UserName, ProjectName, Organization, StartDate, CollabEmail, Background, EvalHistory, PurposeUse) VALUES ('" + userName + "', '" + projectName + "', '" + org + "', '" + dateStarted + "', '" + email + "', '','','');";


      console.log(sqlQuery);
      //to remove in production version if not I will expose the password of the user
      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        console.log(data);

        if (data) { res.redirect('/html/WelcomePage.html') }
        else {
          res.send('Incorrect Input!');
        } res.end();

        sql.close();
      });
    });
  });

  return app;
}

//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});
