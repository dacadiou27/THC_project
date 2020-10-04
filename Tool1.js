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
  res.sendFile(path.join(__dirname + '/public/html/Tool1.html'));

  res.send(req.query.userNameSession) = userSession;

  // connect to your database

  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var sqlRequest = new sql.Request();

    let sqlQuery = "SELECT Background FROM dbo.Projects WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
    //  console.log(sqlQuery);

    sqlRequest.query(sqlQuery, function (err, data) {
      if (err) console.log(err)

      console.log(data + " data from SQL");
      console.log(data.recordset[0].Background + " data - background from SQL");

      //req.params.bgrd = data.recordset[0].Background;
     // req.params.InfoFromDB = data.recordset[0].Background;

      //var name=document.getElementById('Background2')

      //    if (data.recordset[0].Background) {
      //      document.getElementById("bgrd").innerHTML="text area";
      //document.getElementById("bgrd").value = data.recordset[0].Background;
      //bgrd.innerHTML = "text area";
      //document.getElementById("bgrd").value = "text area";
      //document.getElementById('Background2')=data.recordset[0].Background;
      //document.Background2.value=data.recordset[0].Background;
      //name=data.recordset[0].Background;
      // req.body.Background2 = data.recordset[0].Background;
      //}

      //  else {
      //    res.send('Incorrect Input!');
      //  } res.end();

      sql.close();
    });
  });
});

app.post('/background', function (req, res) {
  console.log("Welcome " + userSession + " from Tool1 Page!")
  //res.send(req.body.userNameSession)=userSession;

  // connect to your database
  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var sqlRequest = new sql.Request();

    let backgroundHTML = req.body.bgrd;

    console.log(backgroundHTML + ' from HTML');

    let sqlQuery = "UPDATE dbo.Projects SET Background = '" + backgroundHTML + "' WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
    console.log(sqlQuery);

    sqlRequest.query(sqlQuery, function (err, data) {
      if (err) console.log(err)
      console.log(data);

      if (data) {
        res.redirect('/html/Tool1.html');
        
       // res.send(req.body.userNameSession) = userSession;
       // res.send(req.body.bgrd) = userSession;
      }
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
