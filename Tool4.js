const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

/* parse application/json*/
app.use(bodyParser.json());/*The request data and their response data will be formated in JSON form*/




module.exports = function () {

  //let userSession = 'user1';
  //let projectName = 'projectU1';

  app.get('/Tool4Get', function (req, res) {

    var data;

    sql.connect(config, function (err) {

      if (err) console.log(err);

      /*// create Request object*/
      var sqlRequest = new sql.Request();
      let sqlQuery = "SELECT * FROM Tool4Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

      sqlRequest.query(sqlQuery, function (err, data) {
        //console.log(sqlQuery);
        if (err) console.log(err)
        console.log(data);


        let table = "";
        var i = 0;
        data.recordset.forEach(element => {
          table += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='stakeholderTypes' value='" + data.recordset[i].stakeholderTypes + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='stakeholderNames' value='" + data.recordset[i].stakeholderNames + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='stakeholderPurp' value=' " + data.recordset[i].stakeholderPurp + "' ></td><td><input style='text-align: left;' type='text' class='form-control'  name='stakeholderNat' value='" + data.recordset[i].stakeholderNat + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='primIntUser' value='" + data.recordset[i].primIntUser + "'></td><td><input type='button' value='-' class='btn' onclick='deleteRow(this)'/></td></tr>";
          i++;
        });

        //console.log(table);
        //res.send(table);
        if (data) {
          let startHTML = '<!DOCTYPE html><html lang="en"><!--Date : 14-09-2020--><!--Title : Evaluation Stakeholders--><!--Description : NFBC--><!--Use "Shift" + "Alt" +"F" to justify evething --><head> <title>Stakeholders</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> <script src="js/jquery.min.js"></script> <!-- External set up of style--> <link rel="stylesheet" type="text/css" href="../css/style.css"> <link rel="stylesheet" type="text/css" href="../css/styletable.css"> <!-- Internal set up of style--> <style type="text/css"> </style> <!-- External scripts--> <script type="text/javascript" src="../js/table.js"></script></head><body> <!--From template page--> <div class="container" style="background-color: white;"> <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: white;"> <a href="https://www.evalacademy.com/"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="70"> </a> <!--<a class="navbar-brand" href="https://www.evalacademy.com/new-products">Menu</a>--> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="nav navbar-nav ml-auto"> <li class="nav-item "> <a class="nav-link active" href="./index.html">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="./User Setting.html">Account Setting</a> </li> <li class="nav-item"> <a class="nav-link" href="./Welcome Page.html">Projects</a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item"> <a href="https://twitter.com/EvalAcademy" class="fa fa-twitter"></a> <a href="https://www.linkedin.com/company/evalacademy" class="fa fa-linkedin"></a> <a href="https://www.facebook.com/EvaluationAcademy" class="fa fa-facebook"></a> </li> </ul> </div> </nav> </div> <!--From template page--> <div class="container header"> </br> <h1>EvaluCreator</h1> <h2>Evertyhing you need to create your Evaluation plan</h2> </br> </div> <!--To develop--> <div class="container main"> <h3 class="title">Stakeholder Matrix</h3> <div> <ul class="nav navbar-nav"> <li class="nav-item, display: inline;"> <table> <tr> <th> <div class="tool"> <form action="/Tool1Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/1_Program.jpg" alt="Tool1" height="50"></button> </form> <span class="tooltiptexticon">Background</span> </div> </th> <th> <div class="tool"> <form action="/Tool2Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/2_Program_Initiative.jpg" alt="Tool2" height="50"></button> </form> <span class="tooltiptexticon">Initiative</span> </div> </th> <th> <div class="tool"> <form action="/Tool3Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/3_evaluaiton_history.jpg" alt="Tool3" height="50"></button> </form> <span class="tooltiptexticon">History</span> </div> </th> <th> <div class="tool"> <form action="/Tool4Get" method="GET"> <button type="submit" name="" value="" class="btnicon logoactive"><img src="../img/4_Evalaution_Stakeholders.jpg" alt="Tool4" height="50"></button> </form> <span class="tooltiptexticon">Stakeholders</span> </div> </th> <th> <div class="tool"> <form action="/Tool5Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/5_Evalaution_Purpose.png" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Purpose</span> </div> </th> <th> <div class="tool"> <form action="/Tool6Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/6_Evaluation_scope.jpg" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Scope</span> </div> </th> <th> <div class="tool"> <form action="/Tool7Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/7_Data_Collection.jpg" alt="Tool7" height="50"></button> </form> <span class="tooltiptexticon">Data</span> </div> </th> <th> <div class="tool"> <form action="/Tool8Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/8_ethics.jpg" alt="Tool8" height="50"></button> </form> <span class="tooltiptexticon">Ethics</span> </div> </th> <th> <div class="tool"> <form action="/Tool9Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/9_Reporting.jpg" alt="Tool9" height="50"></button> </form> <span class="tooltiptexticon">Reporting</span> </div> </th> </tr> </table> </li> </ul> </div> <div class="form-group"> <br /> <div class="tool"> <label for="Stakeholder" class="section">Stakeholder</label> <!----Form-----> <form action="/stakeholders" method="POST"> <table id="stakeholderTable" class="table center"> <thead class="thead-dark"> <tr style="text-align:center"> <th scope="col" style="width:19%">Stakeholder Types</th> <th scope="col" style="width:19%">Stakeholder Names</th> <th scope="col" style="width:19%">Stakeholder Purpose/Use</th> <th scope="col" style="width:19%">Stakeholder Nature of Involvement</th> <th scope="col" style="width:19%">Primary Intended User(s)</th> </tr> </thead> <tbody>';
          let endHTML = '<tr> <td> <!--Stakeholder Types--> <select id="stakeholderTypes" class="custom-select"> <option value="select">Select</option> <option value="Funders">Funders</option> <option value="Partner Organizations">Partner Organizations</option> <option value="Program Beneficiaries">Program Beneficiaries</option> <option value="Academic/Research">Academic/Research</option> <option value="Program Staff">Program Staff</option> <option value="Community members/beneficiaries">Community members/beneficiaries</option> <option value="Government">Government</option> <option value="Other (specify)">Other (specify)</option> </select> </td> <td> <!--Stakeholder Names--> <input type="text" id="stakeholderNames" placeholder="Stakeholder Names" style="width: 250px; height:35px"> </td> <td> <!--Stakeholder Purpose/Use--> <select name="selPurpose[]" id="selPurpose" size="4" multiple> <option value="Accountability">Accountability</option> <option value="Advocacy">Advocacy</option> <option value="Development">Development</option> <option value="Knowledge mobilization">Knowledge mobilization</option> <option value="Learning and improvement">Learning and improvement</option> <option value="Quality improvement">Quality improvement</option><br> <option value="Policy Development">Policy Development</option><br> <option value="Resource Allocation">Resource Allocation</option><br> <option value="Other (specify)">Other (specify)</option> <textarea name="output" id="output" placeholder="" cols="26" rows="4" readonly></textarea> <br> <button type = "button" class="btn" onclick = "showChoicesPurpose()">Select Purpose/Use</button> </select> </td> <td> <!--Stakeholder Nature of Involvement--> <select name="selNature[]" id="selNature" size="4" multiple> <option value="Inform evaluation">Inform evaluation</option> <option value="Advise on methodology">Advise on methodology</option> <option value="Collect data">Collect data</option> <option value="Learn and iterate on program design">Learn and iterate on program design</option> <option value="Analyze and interpret findings">Analyze and interpret findings</option> <option value="Co-create recommendations">Co-create recommendations</option> <option value="Share data">Share data</option><br> <option value="Approve evaluation plan">Approve evaluation plan</option><br> <option value="Participate in data collection">Participate in data collection</option><br> <option value="Other">Other (specify)</option><br> <textarea name="output2" id="output2" placeholder="" cols="26" rows="4" readonly></textarea> <br> <button type = "button" class="btn" onclick = "showChoicesNature()">Select Nature of Involvement</button> </select> </td> <td> <!--Primary Intended User(s)--> <select id="PrimIntUser" class="custom-select"> <option value="Yes">Yes</option> <option value="No">No</option> </select> </td> <td></td> </tr> </tbody> </table> <div class="text-right"> <input type="button" class="btn" value="Add Row" onclick="addRow()" /> <input type="submit" id="query" class="btn" value="Save" /> </div> <br> </form> <br> <br> <!--From template page--> <div class="container footer"> <hr> <!-- defines a thematic break in an HTML page --> <a href="https://www.evalacademy.com/"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://www.threehive.ca/our-team"> <img alt=" Three Hive Consulting Logo" src="../img/Three Hive .png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://twitter.com/EvalAcademy" class="fa fa-twitter">&nbsp</a> <a href="https://www.linkedin.com/company/evalacademy" class="fa fa-linkedin">&nbsp</a> <a href="https://www.facebook.com/EvaluationAcademy" class="fa fa-facebook">&nbsp</a> <a href="https://www.evalacademy.com/faqs" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbspFAQs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</a> <a href="https://www.evalacademy.com/contact" target="_blank">Contact Us</a> </div></body></html>';
          let pageHTML = startHTML + table + endHTML;


          res.send(pageHTML);
          sql.close();
        }
        else {
          res.sendFile(path.join(__dirname + '/public/html/Tool4.html'));
        }

      });
    });

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


      //console.log("--------------");
      //console.log(stakeholderTypesHTML);
      //console.log(stakeholderNamesHTML);
      //console.log(stakeholderPurpHTML);
      //console.log(stakeholderNatHTML);
      //console.log(primIntUserHTML);
      //console.log("--------------");

      //clear previous date in table for this user and this project
      let sqlQuery = "DELETE FROM Tool4Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

      let sqlQuery2 = "";
      let sqlQueryTot = "";
      /*// if table is multiple row */
      if (typeof stakeholderTypesHTML == 'object') {

        var i = 0;
        stakeholderTypesHTML.forEach(element => {
          sqlQuery2 += " INSERT INTO Tool4Table (UserName, ProjectName, stakeholderTypes, stakeholderNames, stakeholderPurp, stakeholderNat, primIntUser) VALUES ('" + userSession + "', '" + projectName + "', '" + stakeholderTypesHTML[i] + "','" + stakeholderNamesHTML[i] + "','" + stakeholderPurpHTML[i] + "','" + stakeholderNatHTML[i] + "','" + primIntUserHTML[i] + "');";
          i++;
        });
      }

      /*// if table is only one row*/
      else {
        sqlQuery2 = " INSERT INTO Tool4Table (UserName, ProjectName, stakeholderTypes, stakeholderNames, stakeholderPurp, stakeholderNat, primIntUser) VALUES ('" + userSession + "', '" + projectName + "', '" + stakeholderTypesHTML + "','" + stakeholderNamesHTML + "','" + stakeholderPurpHTML + "','" + stakeholderNatHTML + "','" + primIntUserHTML + "');";
      }

      sqlQueryTot = sqlQuery + sqlQuery2;
      sqlRequest.query(sqlQueryTot, function (err, data) {
        console.log(sqlQueryTot);
        if (err) console.log(err)
        sql.close();
      });
    });
  });

  return app;
};

//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});
