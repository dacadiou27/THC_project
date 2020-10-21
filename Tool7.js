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
//get is in the html nav button

//app.get('/', function (req, res) {
//  res.sendFile(path.join(__dirname + '/public/html/Tool7.html'));
//});

app.get('/Tool7Get', function (req, res) {
//app.get('/', function (req, res) {
  //to work locally
  //res.sendFile(path.join(__dirname + '/public/html/Tool7.html'));
  //});


  let startHTML = '<!DOCTYPE html><html lang="en"><!--Date :Sept 14, 2020 --><!--Title :Tool 7_Data Collection --><!--Description :Raegan Tyshkewich --><!--Use "Shift" + "Alt" +"F" to justify evething --><head> <title>Data Collection</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> <!-- External set up of style--> <link rel="stylesheet" type="text/css" href="../css/style.css"> <link rel="stylesheet" type="text/css" href="../css/styletable.css"> <!-- Internal set up of style--> <style type="text/css"> .tooltiptext { width: 15%; } </style> <!-- External scripts--> <script type="text/javascript" src="../js/table.js"></script></head><body> <!--From template page--> <div class="container" style="background-color: white;"> <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: white;"> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="70"> </a> <!--<a class="navbar-brand" href="https://www.evalacademy.com/new-products">Menu</a>--> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="nav navbar-nav ml-auto"> <li class="nav-item "> <a class="nav-link active" href="./index.html">Home</a> </li> <!-- <li class="nav-item"> <a class="nav-link" href="./LoginPage.html">Login</a> </li> <li class="nav-item"> <a class="nav-link" href="./NewAccount.html">New Account</a> </li> --> <li class="nav-item"> <a class="nav-link" href="./UserSetting.html">Account Setting</a> </li> <li class="nav-item"> <a class="nav-link" href="./WelcomePage.html">Projects</a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item"> <a> <form action="/logout" method="POST"> <input type="submit" class=" btn-xm" value="Logout" /> </form> </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter"></a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin"></a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook"></a> </li> </ul> </div> </nav> </div> <!--From template page--> <div class="container header"> </br> <h1>EvaluCreator</h1> <h2>Evertyhing you need to create your Evaluation plan</h2> </br> </div> <!--To develop--> <div class="container main"> <h3 class="title">Data Collection</h3> <div> <ul class="nav navbar-nav"> <li class="nav-item, display: inline;"> <table> <tr> <th> <div class="tool"> <form action="/Tool1Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/1_Program.jpg" alt="Tool1" height="50"></button> </form> <span class="tooltiptexticon">Background</span> </div> </th> <th> <div class="tool"> <form action="/Tool2Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/2_Program_Initiative.jpg" alt="Tool2" height="50"></button> </form> <span class="tooltiptexticon">Initiative</span> </div> </th> <th> <div class="tool"> <form action="/Tool3Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/3_evaluaiton_history.jpg" alt="Tool3" height="50"></button> </form> <span class="tooltiptexticon">History</span> </div> </th> <th> <div class="tool"> <form action="/Tool4Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/4_Evalaution_Stakeholders.jpg" alt="Tool4" height="50"></button> </form> <span class="tooltiptexticon">Stakeholders</span> </div> </th> <th> <div class="tool"> <form action="/Tool5Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/5_Evalaution_Purpose.png" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Purpose</span> </div> </th> <th> <div class="tool"> <form action="/Tool6Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/6_Evaluation_scope.jpg" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Scope</span> </div> </th> <th> <div class="tool"> <form action="/Tool7Get" method="GET"> <button type="submit" name="" value="" class="btnicon logoactive"><img src="../img/7_Data_Collection.jpg" alt="Tool7" height="50"></button> </form> <span class="tooltiptexticon">Data</span> </div> </th> <th> <div class="tool"> <form action="/Tool8Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/8_ethics.jpg" alt="Tool8" height="50"></button> </form> <span class="tooltiptexticon">Ethics</span> </div> </th> <th> <div class="tool"> <form action="/Tool9Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/9_Reporting.jpg" alt="Tool9" height="50"></button> </form> <span class="tooltiptexticon">Reporting</span> </div> </th> </tr> </table> </li> </ul> </div> <!--Summary--> <div> <form action="/collection" method="POST"> <div class="form-group"> <label for="Background" class="section">Data Collection Plan </label> <p>Provide a high level summary of how to intend to answer your evaluation questions.</p>';
  let summaryHTML = "";
  let QHTML = "";
  //let lowerHTMLPage = "";
  let table1 = "";
  let UptoTable1 = "";
  let table2 = "";
  let table2startHTML = "";
  let table2endHTML = "";
  let table3 = "";

  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // Get and dispaly user data from database- create Request object
    var sqlRequest = new sql.Request();
    let sqlQuery = "SELECT * FROM Projects WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

    sqlRequest.query(sqlQuery, function (err, data) {
      if (err) console.log(err)
      //console.log(data + " data from SQL");
      //console.log(data.recordset[0].DataPlanSummary + " data - DataPlanSummary from SQL");
      let DataPlanSummaryData = data.recordset[0].DataPlanSummary;

      if (data) {
        let textareaStart = '<textarea class="form-control" id="Background" rows="4" name="dataDesc">';
        let endHTML = '</textarea> <br> <div class="text-right"> <!--<input type="submit" class="btn" value="Save" /> --><!-- <div id="error"></div> --> </div>  </div> <br>';
        summaryHTML = startHTML + textareaStart + DataPlanSummaryData + endHTML;

        //res.send(summaryHTML);
        sql.close();
      }
      else {
        res.sendFile(path.join(__dirname + '/public/html/Tool7.html'));
      }
    });
  });
  //});

  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var sqlRequest = new sql.Request();
    let sqlQuery = "SELECT * FROM Tool6Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

    sqlRequest.query(sqlQuery, function (err, data) {
      //console.log(sqlQuery);
      if (err) console.log(err)
      //console.log(data);

      let Q1SQL = data.recordset[0].EvalQ;
      let Q2SQL = data.recordset[1].EvalQ;
      let Q3SQL = data.recordset[2].EvalQ;
      let Q4SQL = data.recordset[3].EvalQ;
      let Q5SQL = data.recordset[4].EvalQ;
      let Q6SQL = data.recordset[5].EvalQ;
      let Q7SQL = data.recordset[6].EvalQ;

      if (data) {
        let startHTMLQ = ' <div class="table-responsive"> <table id="questions" class="table center"> <thead class="thead-dark"> <tr class="text-left"> <th style="width:100%" colspan="2" scope="col"> <label for="Title" class="align-middle">Questions</label> </th> </tr> </thead> <tbody> <tr><td> 1 ';
        let endHTMLQ = '</td></tr></th>  </tbody> </table> </div> <br>';
        

        QHTML = startHTMLQ + Q1SQL + "</td></tr><tr><td> 2 " + Q2SQL + "</td></tr><tr><td> 3 " + Q3SQL + "</td></tr><tr><td> 4 " + Q4SQL + "</td></tr><tr><td> 5 " + Q5SQL + "</td></tr><tr><td> 6 " + Q6SQL + "</td></tr><tr><td> 7 " + Q7SQL + endHTMLQ;

        //res.send (QHTML);
        //res.send(summaryHTML + QHTML);
        sql.close();

      }
      else {
        res.sendFile(path.join(__dirname + '/public/html/Tool7.html'));
      }
    });
  });

  ////Table 1
  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var sqlRequest = new sql.Request();

    let sqlQuery = "SELECT * FROM Tool7Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
    sqlRequest.query(sqlQuery, function (err, data) {
      //console.log(sqlQuery);
      if (err) console.log(err)
      //console.log(data);

      var i = 0;
      data.recordset.forEach(element => {
        table1 += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='QR' value='" + data.recordset[i].Subquestion + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='Indicator' value='" + data.recordset[i].Indicator + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='Method' value='" + data.recordset[i].Method + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='Start' value='" + data.recordset[i].StartDate + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='End' value='" + data.recordset[i].EndDate + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='Resp' value='" + data.recordset[i].Responsible + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='Notes' value='" + data.recordset[i].Notes + "'></td><td><input type='button' value='-' class='btn' onclick='deleteRow(this)'/></td></tr>";
        i++;
      });
      //console.log(table1);
      let table1startHTML = '<!--Subquestions--> <div class="table-responsive"> <table id="subquestions" class="table center"> <thead class="thead-dark"> <tr class="text-center"> <th scope="col"> <div class="tool"> <label for="Title" class="align-middle"> Subquestions </label> </div> </th> <th scope="col"> <div class="tool"> <label for="Title" class="align-middle"> Evidence / Indicators </label> <span class="tooltiptext"> How will we know it? </span> </div> </th> <th scope="col"> <div class="tool"> <label for="Title" class="align-middle"> Method </label> <span class="tooltiptext"> How will we gather this information? <br> What tools shall we use? </span> </div> </th> <th scope="col"> <div class="tool"> <label for="Title" class="align-middle"> Start Date </label> <span class="tooltiptext"> When do we start collecting the data? </span> </div> </th> <th scope="col"> <div class="tool"> <label for="Title" class="align-middle"> End Date </label> <span class="tooltiptext"> When are we finished collecting the data? </span> </div> </th> <th scope="col"> <div class="tool"> <label for="Title" class="align-middle"> Responsibility </label> <span class="tooltiptext">Who will collect the data? </span> </div> </th> <th scope="col"> <div class="tool"> <label for="Title" class="align-middle"> Notes </label> <span class="tooltiptext">What should we keep in mind? </span> </div> </th> <th></th> </tr> </thead> <tbody>';
      let table1endHTML = '<tr> <th><input style="text-align: left;" type="text" class="form-control" id="QR" placeholder="Ex 1.1, 2.1, 3.1 ..." name="" value=""></th> <th><input style="text-align: left;" type="text" class="form-control" id="Indicator" placeholder="Indicator" name=""></th> <th><input style="text-align: left;" type="text" class="form-control" id="Method" placeholder="Method" name=""></th> <th><input style="text-align: left;" type="date" class="form-control" id="Start" placeholder="Start Date" name=""></th> <th><input style="text-align: left;" type="date" class="form-control" id="End" placeholder="end Date" name=""></th> <th><input style="text-align: left;" type="text" class="form-control" id="Resp" placeholder="Responsible" name=""></th> <th><input style="text-align: left;" type="text" class="form-control" id="Notes" placeholder="Notes" name=""></th> <th></th></tr> </table> <div> <input type="button" class="btn" value="Add Subquestion" onclick="addSubquestion()" /><!-- <input type="submit" class="btn" value="Save" id="query" /> --></div> </div> <br>';

      UptoTable1 = table1startHTML + table1 + table1endHTML;
      //res.send( QHTML + table1startHTML + table1 + table1endHTML);
      //res.send(summaryHTML + QHTML + table1startHTML + table1 + table1endHTML)
      sql.close();
    });
  });
  //});

  ////Table 2
  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var sqlRequest = new sql.Request();

    let sqlQuery2 = "SELECT * FROM Tool7Table2 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

    sqlRequest.query(sqlQuery2, function (err, data) {
      //console.log(sqlQuery2);
      if (err) console.log(err)
      //console.log(data);

      //let table2 = "";
      var i = 0;
      data.recordset.forEach(element => {
        table2 += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='Num' value='" + data.recordset[i].Subquestion + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S1' value='" + data.recordset[i].Source1 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S2' value='" + data.recordset[i].Source2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S3' value='" + data.recordset[i].Source3 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S4' value='" + data.recordset[i].Source4 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S5' value='" + data.recordset[i].Source5 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S6' value='" + data.recordset[i].Source6 + "'></td><td><input type='button' value='-' class='btn' onclick='deleteRow(this)'/></td></tr>";
        i++;
      });
      //console.log(table2);
      table2startHTML = '<!--Data Sources gets autopopulated--> <div class="table-responsive"> <label for="Background" class="section">Data Sources</label> <!--<p>How will we gather this information? What tools shall we use?</p>--> <table id="dataCollTable" class="table center"> <thead class="thead-dark"> <tr class="text-center"> <th scope="col">Evaluation Question</th> <th scope="col">Data <br>Source 1</th> <th scope="col">Data<br>Source 2</th> <th scope="col">Data<br>Source 3</th> <th scope="col">Data<br>Source 4</th> <th scope="col">Data<br>Source 5</th> <th scope="col">Data<br>Source 6</th> <th></th> </tr> </thead> <tbody>';
      table2endHTML = '<tr> <th><input style="text-align: left;" type="text" class="form-control" id="Num" placeholder="Ex 1.1, 2.1, 3.1" name=""></th> <th><input style="text-align: left;" type="text" class="form-control" id="S1" placeholder="Source 1" name=""></th> <th><input style="text-align: left;" type="text" class="form-control" id="S2" placeholder="Source 2" name=""></th> <th><input style="text-align: left;" type="text" class="form-control" id="S3" placeholder="Source 3" name=""></th> <th><input style="text-align: left;" type="text" class="form-control" id="S4" placeholder="Source 4" name=""></th> <th><input style="text-align: left;" type="text" class="form-control" id="S5" placeholder="Source 5" name=""></th> <th><input style="text-align: left;" type="text" class="form-control" id="S6" placeholder="Source 6" name=""></th> <th></th> </tr> </table><input type="button" class="btn" value="Add Source" onclick="addSources();" /> <!--<input type="submit" class="btn" value="Save" id="query" />--> </div> <br>';

      if (data) {
        //res.send(summaryHTML + QHTML + UptoTable1 + table2startHTML + table2 + table2endHTML);
        sql.close();
      }
      else {
        res.sendFile(path.join(__dirname + '/public/html/Tool9.html'));
      }
    });
  });
  //});

  ////Table 3
  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var sqlRequest = new sql.Request();


    let sqlQuery3 = "SELECT * FROM Tool7Table3 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
    sqlRequest.query(sqlQuery3, function (err, data) {
      //console.log(sqlQuery3);
      if (err) console.log(err)
      //console.log(data);


      var i = 0;
      data.recordset.forEach(element => {
        table3 += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='Meth' value='" + data.recordset[i].Method + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='details' value='" + data.recordset[i].Details + "'></td><td><input type='button' value='-' class='btn' onclick='deleteRow(this)'/></td></tr>";
        i++;
      });
      //console.log(table3);

      if (data) {
        let table3startHTML = '<!--Data Collection Methods autopopulated--> <div class="form-group"> <div class="form-group"> <label for="Background" class="section">Data Collection Methods</label> <p>Describe how you are collecting data. How many interviews will you conduct? How are evaluation participants recruited for different methods? How are your surveys administered? Where will focus groups be held?</p> <table id="dataMethTable" class="table center table-responsive"> <thead class="thead-dark"> <th class="text-left" style="width:20%" colspan="1" scope="col"> <label for="Title" class="align-middle">Data Method</label> </th> <th style="width:76%" colspan="1" scope="col"></th> <th style="width:4%" colspan="1" scope="col"></th> <th ></th> </thead> <tbody>';
        let table3endHTML = '<tr> <td><input style="text-align: left;" type="text" class="form-control" id="Meth" placeholder=" Type Meth" name=""> </td> <td><input style="text-align: left;" type="text" class="form-control" id="details" placeholder=" Type Details" name=""> </td> <td></td> </tr> </tbody> </table> <input type="button" class="btn" value="Add Method" onclick="addMethod();" /> <input type="submit" class="btn" value="Save" id="query" /> </div> </div> </form> </div> <!--From template page--> <div class="container footer"> <hr> <!-- defines a thematic break in an HTML page --> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://www.threehive.ca/our-team" target="_blank"> <img alt=" Three Hive Consulting Logo" src="../img/Three Hive .png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter">&nbsp</a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin">&nbsp</a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook">&nbsp</a> <a href="https://www.evalacademy.com/faqs" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbspFAQs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</a> <a href="https://www.evalacademy.com/contact" target="_blank">Contact Us</a> </div> </div></body></html>';

        res.send(summaryHTML + QHTML + UptoTable1 + table2startHTML + table2 + table2endHTML + table3startHTML + table3 + table3endHTML);
        //res.send(table2);
        sql.close();
      }
      else {
        res.sendFile(path.join(__dirname + '/public/html/Tool7.html'));
      }
    });
  });
});

/////////////////////////////////////////////////////////////

//Data Collection Plan - post working

app.post('/collection', function (req, res) {
  console.log("Welcome " + userSession + " from Tool7 Page!")

  // connect to your database
  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var sqlRequest = new sql.Request();

    //textarea
    let DataDescHTML = req.body.dataDesc;
    console.log("------textarea--------");
    console.log(DataDescHTML);
    console.log("--------------");

    //table 1
    let QRHTML = req.body.QR;
    let IndicatorHTML = req.body.Indicator;
    let MethodHTML = req.body.Method;
    let StartHTML = req.body.Start;
    let EndHTML = req.body.End;
    let RespDueHTML = req.body.Resp;
    let NotesHTML = req.body.Notes;
    //console.log("-------table 1-------");
    //console.log(QRHTML);
    //console.log(IndicatorHTML);
    //console.log(MethodHTML);
    //console.log(StartHTML);
    //console.log(EndHTML);
    //console.log(RespDueHTML);
    //console.log(NotesHTML);
    //console.log("--------------");

    //table 2
    let NumHTML = req.body.Num;
    let S1HTML = req.body.S1;
    let S2HTML = req.body.S2;
    let S3HTML = req.body.S3;
    let S4HTML = req.body.S4;
    let S5HTML = req.body.S5;
    let S6HTML = req.body.S6;
    //console.log("-------table 2-------");
    //console.log(NumHTML);
    //console.log(S1HTML);
    //console.log(S2HTML);
    //console.log(S3HTML);
    //console.log(S4HTML);
    //console.log(S5HTML);
    //console.log(S6HTML);
    //console.log("--------------");

    //table 3
    let MethodHTML2 = req.body.Meth;
    let DetailsHTML = req.body.details;
    //console.log("-------table 3-------");
    //console.log(MethodHTML2);
    //console.log(DetailsHTML);
    //console.log("--------------");

    //Textarea
    
    let sqlQuery = "UPDATE dbo.Projects SET DataPlanSummary = '" + DataDescHTML + "' WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
    console.log(sqlQuery);
    
    sqlRequest.query(sqlQuery, function (err, data) {
      if (err) console.log(err)
      console.log(data);
      sql.close();
    });
   
    ////Table1
    //clear previous date in table for this user and this project
    let sqlQuery1 = " DELETE FROM Tool7Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
    let sqlQuery2 = "";
    let sqlQueryTot = "";
    // if table is multiple row
    if (typeof QRHTML == 'object') {
      var i = 0;
      QRHTML.forEach(element => {
        sqlQuery2 += " INSERT INTO Tool7Table (UserName, ProjectName, Subquestion, Indicator, Method, StartDate, EndDate, Responsible, Notes) VALUES ('" + userSession + "', '" + projectName + "', '" + QRHTML[i] + "','" + IndicatorHTML[i] + "','" + MethodHTML[i] + "','" + StartHTML[i] + "','" + EndHTML[i] + "','" + RespDueHTML[i] + "','" + NotesHTML[i] + " ');";
        //console.log(sqlQuery2);
        i++;
      });
    }
    // if table is only one row
    else {
      sqlQuery2 = " INSERT INTO Tool7Table (UserName, ProjectName, Subquestion, Indicator, Method, StartDate, EndDate, Responsible, Notes) VALUES ('" + userSession + "', '" + projectName + "', '" + QRHTML + "','" + IndicatorHTML + "','" + MethodHTML + "','" + StartHTML + "','" + EndHTML + "','" + RespDueHTML + "','" + NotesHTML + " ');";
      //console.log(sqlQuery2);
      console.log(sqlQuery2);
    }

    sqlQueryTot = sqlQuery1 + sqlQuery2;
    console.log(sqlQueryTot);
    sqlRequest.query(sqlQueryTot, function (err, data) {
      if (err) console.log(err);
      //console.log(data);
      sql.close();
    });

    ////Table2
    //clear previous date in table for this user and this project
    let sqlQuery4 = "DELETE FROM Tool7Table2 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
    let sqlQuery5 = "";
    let sqlQueryTot2 = "";

    // if table is multiple row   
    if (typeof NumHTML == 'object') {
      var i = 0;
      NumHTML.forEach(element => {
        sqlQuery5 += " INSERT INTO Tool7Table2 (UserName, ProjectName, Subquestion, Source1, Source2, Source3, Source4, Source5, Source6) VALUES ('" + userSession + "', '" + projectName + "', '" + NumHTML[i] + "','" + S1HTML[i] + "','" + S2HTML[i] + "','" + S3HTML[i] + "','" + S4HTML[i] + "','" + S5HTML[i] + "','" + S6HTML[i] + " ');";
        //console.log(sqlQuery5);
        i++;
      });
    }
    // if table is only one row
    else {
      sqlQuery5 = " INSERT INTO Tool7Table2 (UserName, ProjectName, Subquestion, Source1, Source2, Source3, Source4, Source5, Source6) VALUES ('" + userSession + "', '" + projectName + "', '" + NumHTML + "','" + S1HTML + "','" + S2HTML + "','" + S3HTML + "','" + S4HTML + "','" + S5HTML + "','" + S6HTML + " ');";
      //console.log(sqlQuery5);
    }

    sqlQueryTot2 = sqlQuery4 + sqlQuery5;
    console.log(sqlQueryTot2);
    sqlRequest.query(sqlQueryTot2, function (err, data) {
      if (err) console.log(err)
      //console.log(data);
      sql.close();
    });

    ////Table3
    //clear previous date in table for this user and this project
    let sqlQuery7 = "DELETE FROM Tool7Table3 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

    let sqlQuery8 = "";
    let sqlQueryTot3 = "";

    // if table is multiple row
    if (typeof MethodHTML2 == 'object') {
      var i = 0;
      MethodHTML2.forEach(element => {
        sqlQuery8 += "INSERT INTO Tool7Table3 (UserName, ProjectName, Method, Details) VALUES ('" + userSession + "', '" + projectName + "', '" + MethodHTML2[i] + "','" + DetailsHTML[i] + " ');";
        i++;
      });
    }
    // if table is only one row
    else {
      sqlQuery8 = "INSERT INTO Tool7Table3 (UserName, ProjectName, Method, Details) VALUES ('" + userSession + "', '" + projectName + "', '" + MethodHTML2 + "','" + DetailsHTML + " ');";
    }

    sqlQueryTot3 = sqlQuery7 + sqlQuery8;
    console.log(sqlQueryTot3);
    sqlRequest.query(sqlQueryTot3, function (err, data) {
      if (err) console.log(err);
      //console.log(data);
      sql.close();
    });

  });
});


  return app;
};

//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});