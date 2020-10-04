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

  //let userSession = 'user1';
  let projectName = 'projectU1';

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/Tool3.html'));
  });

  app.post('/history', function (req, res) {
    console.log("Welcome " + userSession + " from Tool3 Page!")
    // connect to your database
    sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var sqlRequest = new sql.Request();

      let historyHTML = req.body.history;

      console.log(historyHTML + ' from HTML');

      let sqlQuery = "UPDATE dbo.Projects SET EvalHistory = '" + historyHTML + "' WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
      console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        console.log(data);

        if (data) { res.redirect('/html/Tool3.html') }
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
