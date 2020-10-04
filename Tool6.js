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

  // let userSession = 'user1';
  let projectName = 'projectU1';

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/Tool6.html'));
  });

  app.post('/scope', function (req, res) {
    console.log("Welcome " + userSession + " from Tool6 Page!")
    // connect to your database
    sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var sqlRequest = new sql.Request();

      let EvalScopeHTML = req.body.scopedesc;

      console.log(EvalScopeHTML + ' from HTML');

      let sqlQuery = "UPDATE dbo.Projects SET EvalScope = '" + EvalScopeHTML + "' WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
      console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        console.log(data);

        /*
        if (data) { res.redirect('/html/Tool6.html') }
        else {
          res.send('Incorrect Input!');
        } res.end();
        */

        sql.close();
      });
    });
  });

  //Questions/Reasons 1-7
  app.post('/scope2', function (req, res) {
    console.log("Welcome " + userSession + " from Tool6 Page!")
    // connect to your database
    sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var sqlRequest = new sql.Request();

      let QHTML = req.body.Q;
      let RHTML = req.body.R;

      console.log(QHTML);
      console.log(RHTML);

      //clear previous data in table for this user and this project     
      let sqlQuery2 = "DELETE FROM Tool6Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
      //console.log(sqlQuery2);
      sqlRequest.query(sqlQuery2, function (err, data) {
        if (err) console.log(err)
        //console.log(data);
        sql.close();
      });

      // if table/does it work for div? is multiple row
      if (typeof QHTML == 'object') {

        var i = 0;
        QHTML.forEach(element => {
          let sqlQuery3 = "INSERT INTO Tool6Table (UserName, ProjectName, EvalQ, Reason) VALUES ('" + userSession + "', '" + projectName + "', '" + QHTML[i] + "','" + RHTML[i] + "');";
          //console.log(sqlQuery3);
          sqlRequest.query(sqlQuery3, function (err, data) {
            if (err) console.log(err)
            sql.close();
          });
          i++;
        });
      }

      // if table is only one row
      else {
        let sqlQuery4 = "INSERT INTO Tool6Table (UserName, ProjectName, EvalQ, Reason) VALUES ('" + userSession + "', '" + projectName + "', '" + QHTML + "','" + RHTML + "');";
        //console.log(sqlQuery4);
        sqlRequest.query(sqlQuery4, function (err, data) {
          if (err) console.log(err)
          sql.close();
        });
      }

    });
  });

  return app;
};


//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});
