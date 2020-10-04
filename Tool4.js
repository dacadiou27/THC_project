const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');
const { Console } = require('console');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

/* parse application/json*/
app.use(bodyParser.json());/*The request data and their response data will be formated in JSON form*/

module.exports = function () {

  /* let userSession = 'user1';*/
  let projectName = 'projectU1';

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/Tool4.html'));
  });


  app.post('/stakeholders', function (req, res) {
    console.log("Welcome " + userSession + " from Tool4 Page!")
    /* //res.send(req.body.userNameSession)=userSession;*/

    /*// connect to your database*/
    sql.connect(config, function (err) {

      if (err) console.log(err);

      /*// create Request object*/
      var sqlRequest = new sql.Request();

      let stakeholderTypesHTML = req.body.stakeholderTypes;
      let stakeholderNamesHTML = req.body.stakeholderNames;
      let stakeholderPurpHTML = req.body.stakeholderPurp;
      let stakeholderNatHTML = req.body.stakeholderNat;
      let primIntUserHTML = req.body.primIntUser;


      console.log("--------------");
      console.log(stakeholderTypesHTML);
      console.log(stakeholderNamesHTML);
      console.log(stakeholderPurpHTML);
      console.log(stakeholderNatHTML);
      console.log(primIntUserHTML);
      console.log("--------------");

      /* //clear previous date in table for this user and this project */
      let sqlQuery = "DELETE FROM Tool4Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
      sqlRequest.query(sqlQuery, function (err, data) {
        //console.log(sqlQuery);
        if (err) console.log(err)
        /*//console.log(data);*/
        sql.close();
      });

      /*// if table is multiple row */
      if (typeof stakeholderTypesHTML == 'object') {

        var i = 0;
        stakeholderTypesHTML.forEach(element => {
          let sqlQuery2 = "INSERT INTO Tool4Table (UserName, ProjectName, stakeholderTypes, stakeholderNames, stakeholderPurp, stakeholderNat, primIntUser) VALUES ('" + userSession + "', '" + projectName + "', '" + stakeholderTypesHTML[i] + "','" + stakeholderNamesHTML[i] + "','" + stakeholderPurpHTML[i] + "','" + stakeholderNatHTML[i] + "','" + primIntUserHTML[i] + "');";
          sqlRequest.query(sqlQuery2, function (err, data) {
           // console.log(sqlQuery2);
            if (err) console.log(err)
            sql.close();
          });
          i++;
        });
      }

      /*// if table is only one row*/
      else {
        let sqlQuery3 = "INSERT INTO Tool4Table (UserName, ProjectName, stakeholderTypes, stakeholderNames, stakeholderPurp, stakeholderNat, primIntUser) VALUES ('" + userSession + "', '" + projectName + "', '" + stakeholderTypesHTML + "','" + stakeholderNamesHTML + "','" + stakeholderPurpHTML + "','" + stakeholderNatHTML + "','" + primIntUserHTML + "');";
        sqlRequest.query(sqlQuery3, function (err, data) {
          //console.log(sqlQuery3);
          if (err) console.log(err)
          sql.close();
        });
      }

    });
  });

  return app;
};

/*//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});*/
