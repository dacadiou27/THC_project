const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');
const { Console } = require('console');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());//The request data and their response data will be formated in JSON form

module.exports = function () {

  //let userSession = 'user1';
  let projectName = 'projectU1';

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/Tool2.html'));
  });


  app.post('/theory', function (req, res) {
    console.log("Welcome " + userSession + " from Tool2 Page!")
    //res.send(req.body.userNameSession)=userSession;

    // connect to your database
    sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var sqlRequest = new sql.Request();

      let LogicModHTML = req.body.LogicMod;
      let SituationHTML = req.body.Situation;
      let GoalHTML = req.body.Goal;
      let AssumptionsHTML = req.body.Assumptions;
      let FactorsHTML = req.body.Factors;

      let inputsHTML = req.body.inputs;
      let activitiesHTML = req.body.activities;
      let outputsHTML = req.body.ouputs;
      let shortTermHTML = req.body.shortTerm;
      let midTermHTML = req.body.midTerm;
      let longTermHTML = req.body.longTerm;

      console.log("--------------");
      console.log(inputsHTML);
      console.log(activitiesHTML);
      console.log(outputsHTML);
      console.log(shortTermHTML);
      console.log(midTermHTML);
      console.log(longTermHTML);
      console.log("--------------");
      
      let sqlQuery =
        "UPDATE dbo.Tool2 SET LogicMod = '" + LogicModHTML + "' WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "'; UPDATE dbo.Tool2 SET Situation = '" + SituationHTML + "' WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "'; UPDATE dbo.Tool2 SET Goal = '" + GoalHTML + "' WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "'; UPDATE dbo.Tool2 SET Assumptions = '" + AssumptionsHTML + "' WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "'; UPDATE dbo.Tool2 SET Factors = '" + FactorsHTML + "' WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
      //console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        //console.log(data);

        //if (data) {
        //  res.redirect('/html/Tool2.html');
        //}
        //else {
        //  res.send('Incorrect Input!');
        //} res.end();
        sql.close();
      });

      //clear previous date in table for this user and this project     
      let sqlQuery2 = "DELETE FROM Tool2Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
      sqlRequest.query(sqlQuery2, function (err, data) {
        console.log(sqlQuery2);
        if (err) console.log(err)
        //console.log(data);
        sql.close();
      });

      // if table is multiple row
      if (typeof inputsHTML == 'object') {

        var i = 0;
        activitiesHTML.forEach(element => {
          let sqlQuery3 = "INSERT INTO Tool2Table (UserName, ProjectName, Inputs, Activities, Outputs, ShortTerm, MidTerm, LongTerm) VALUES ('" + userSession + "', '" + projectName + "', '" + inputsHTML[i] + "','" + activitiesHTML[i] + "','" + outputsHTML[i] + "','" + shortTermHTML[i] + "','" + midTermHTML[i] + "','" + longTermHTML[i] + "');";
          sqlRequest.query(sqlQuery3, function (err, data) {
            console.log(sqlQuery3);
            if (err) console.log(err)
            sql.close();
          });
          i++;
        });
      }

      // if table is only one row
      else {
        let sqlQuery4 = "INSERT INTO Tool2Table (UserName, ProjectName, Inputs, Activities, Outputs, ShortTerm, MidTerm, LongTerm) VALUES ('" + userSession + "', '" + projectName + "', '" + inputsHTML + "','" + activitiesHTML + "','" + outputsHTML + "','" + shortTermHTML + "','" + midTermHTML + "','" + longTermHTML + "');";
        sqlRequest.query(sqlQuery4, function (err, data) {
          console.log(sqlQuery4);
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
