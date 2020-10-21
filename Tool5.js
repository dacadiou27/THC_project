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
  //let projectName = 'projectU1';

  app.get('/Tool5Get', function (req, res) {

    // connect to your database
    sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      var sqlRequest = new sql.Request();
      let sqlQuery = "SELECT PurposeUse FROM dbo.Projects WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
      //console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        //console.log(data + " data from SQL");
        //console.log(data.recordset[0].PurposeUse + " data - PurposeUse from SQL");
        let PurposeUseData = data.recordset[0].PurposeUse;

        if (data) {
          let startHTML = '<!DOCTYPE html><html lang="en"><!--Date : 14 sept 2020>Title : Tool 5Description : NFBC>Use "Shift" + "Alt" +"F" to justify evething --><head> <title>Purpose and Use</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> <!-- External set up of style--> <link rel="stylesheet" type="text/css" href="../css/style.css"> <link rel="stylesheet" type="text/css" href="../css/styletable.css"> <!-- Internal set up of style--> <style type="text/css"> </style></head><body> <!--From template page--> <div class="container" style="background-color: white;"> <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: white;"> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="70"> </a> <!--<a class="navbar-brand" href="https://www.evalacademy.com/new-products">Menu</a>--> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="nav navbar-nav ml-auto"> <li class="nav-item "> <a class="nav-link active" href="./index.html">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="./UserSetting.html">Account Setting</a> </li> <li class="nav-item"> <a class="nav-link" href="./WelcomePage.html">Projects</a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item"> <a> <form action="/logout" method="POST"> <input type="submit" class=" btn-xm" value="Logout" /> </form> </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter"></a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin"></a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook"></a> </li> </ul> </div> </nav> </div> <!--From template page--> <div class="container header"> </br> <h1>EvaluCreator</h1> <h2>Evertyhing you need to create your Evaluation plan</h2> </br> </div> <!--To develop--> <div class="container main"> <h3 class="title">Purpose and Use</h3> <div> <ul class="nav navbar-nav"> <li class="nav-item, display: inline;"> <table> <tr> <th> <div class="tool"> <form action="/Tool1Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/1_Program.jpg" alt="Tool1" height="50"></button> </form> <span class="tooltiptexticon">Background</span> </div> </th> <th> <div class="tool"> <form action="/Tool2Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/2_Program_Initiative.jpg" alt="Tool2" height="50"></button> </form> <span class="tooltiptexticon">Initiative</span> </div> </th> <th> <div class="tool"> <form action="/Tool3Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/3_evaluaiton_history.jpg" alt="Tool3" height="50"></button> </form> <span class="tooltiptexticon">History</span> </div> </th> <th> <div class="tool"> <form action="/Tool4Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/4_Evalaution_Stakeholders.jpg" alt="Tool4" height="50"></button> </form> <span class="tooltiptexticon">Stakeholders</span> </div> </th> <th> <div class="tool"> <form action="/Tool5Get" method="GET"> <button type="submit" name="" value="" class="btnicon logoactive"><img src="../img/5_Evalaution_Purpose.png" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Purpose</span> </div> </th> <th> <div class="tool"> <form action="/Tool6Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/6_Evaluation_scope.jpg" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Scope</span> </div> </th> <th> <div class="tool"> <form action="/Tool7Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/7_Data_Collection.jpg" alt="Tool7" height="50"></button> </form> <span class="tooltiptexticon">Data</span> </div> </th> <th> <div class="tool"> <form action="/Tool8Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/8_ethics.jpg" alt="Tool8" height="50"></button> </form> <span class="tooltiptexticon">Ethics</span> </div> </th> <th> <div class="tool"> <form action="/Tool9Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/9_Reporting.jpg" alt="Tool9" height="50"></button> </form> <span class="tooltiptexticon">Reporting</span> </div> </th> </tr> </table> </li> </ul> </div> <form action="/purposeUse" method="POST"> <div class="form-group"> <br> <div class="tool"> <label for="Purpose" class="section"> Purpose and Use </label> </div> </div> <p>This evaluation is intended to do something – what is it? Hopefully it will drive decision-making and change. This section can define what kind of decisions the evaluation will support. The purpose may include elements of accountability – perhaps there are organizational or funder mandates to evaluate certain components. Who will use these new insights, and to do what? <p> <textarea class="form-control" id="purposeUse" name="purposeUse" rows="10">';
          let endHTML = '</textarea> <div class="text-right"> <input type="submit" class="btn" value="Save" id="query" /> </div> <div id="error"></div> </form> </div> <!--From template page--> <div class="container footer"> <hr> <!-- defines a thematic break in an HTML page --> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://www.threehive.ca/our-team" target="_blank"> <img alt=" Three Hive Consulting Logo" src="../img/Three Hive .png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter">&nbsp</a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin">&nbsp</a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook">&nbsp</a> <a href="https://www.evalacademy.com/faqs" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbspFAQs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</a> <a href="https://www.evalacademy.com/contact" target="_blank">Contact Us</a> </div></body></html>'
          let pageHTML = startHTML + PurposeUseData + endHTML;
          res.send(pageHTML);
          sql.close();
        }

        else {
          res.sendFile(path.join(__dirname + '/public/html/Tool5.html'));
        }
      });
    });
  });

  app.post('/purposeUse', function (req, res) {
    console.log("Welcome " + userSession + " from Tool5 Page!")

    // connect to your database
    sql.connect(config, function (err) {
      if (err) console.log(err);

      // create Request object
      var sqlRequest = new sql.Request();
      let PurposeUseHTML = req.body.purposeUse;
      //console.log(PurposeUseHTML + ' from HTML');
      let sqlQuery = "UPDATE dbo.Projects SET PurposeUse = '" + PurposeUseHTML + "' WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
      //console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        //console.log(data);

        //if (data) {
        //  res.redirect('/html/Tool5.html');
        //}
        //else {
        //  res.send('Incorrect Input!');
        //} res.end();

        sql.close();
      });
    });
  });

  return app;
};




//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});
