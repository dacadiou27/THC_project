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

  //app.get('/', function (req, res) {
  //  res.sendFile(path.join(__dirname + '/public/html/Tool2.html'));
  //}

  app.get('/Tool2Get', function (req, res) {
    //app.get('/', function (req, res) {

    // connect to your database
    let table = "";
    sql.connect(config, function (err) {
      if (err) console.log(err);

      //////////////////////////////

      var sqlRequest = new sql.Request();
      let sqlQuery1 = "SELECT * FROM Tool2Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";


      sqlRequest.query(sqlQuery1, function (err, data) {
        //console.log(sqlQuery1);
        if (err) console.log(err)
        //console.log(data);

        var i = 0;
        data.recordset.forEach(element => {
          table += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='inputs' value='" + data.recordset[i].Inputs + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='activities' value='" + data.recordset[i].Activities + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='ouputs' value='" + data.recordset[i].Outputs + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='shortTerm' value='" + data.recordset[i].ShortTerm + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='midTerm' value='" + data.recordset[i].MidTerm + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='longTerm' value='" + data.recordset[i].LongTerm + "'></td><td><input type='button' value='-' class='btn' onclick='deleteRow(this)'/></td></tr>";
          i++;
        });
        //console.log(table);
        sql.close();
      });
      ///////////////////////////


      // create Request object
      var sqlRequest = new sql.Request();
      let sqlQuery = "SELECT * FROM dbo.Tool2 WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
      //console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        //console.log(data + " data from SQL");
        //console.log(data.recordset[0].Background + " data - background from SQL");
        let LogicModdData = data.recordset[0].LogicMod;
        let SituationData = data.recordset[0].Situation;
        let GoalData = data.recordset[0].Goal;
        let AssumptionsData = data.recordset[0].Assumptions;
        let FactorsData = data.recordset[0].Factors;

        if (data) {
          let startHTML = '<!DOCTYPE html><html lang="en"><!--Date : 13 sept 2020><!--Title : Tools 2<!--Description : by Dany Cadiou><!--Use "Shift" + "Alt" +"F" to justify evething --><head> <title>Theory</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">--> <!-- External set up of style--> <link rel="stylesheet" type="text/css" href="../css/style.css"> <link rel="stylesheet" type="text/css" href="../css/styletable.css"> <!-- Internal set up of style--> <style type="text/css"> .tooltiptext { width: 20%; } </style> <!-- External scripts--> <script type="text/javascript" src="../js/table.js"></script></head><body> <!--From template page--> <div class="container" style="background-color: white;"> <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: white;"> <a href="https://www.evalacademy.com/"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="70"> </a> <!--<a class="navbar-brand" href="https://www.evalacademy.com/new-products">Menu</a>--> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="nav navbar-nav ml-auto"> <li class="nav-item "> <a class="nav-link active" href="./index.html">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="./UserSetting.html">Account Setting</a> </li> <li class="nav-item"> <a class="nav-link" href="./WelcomePage.html">Projects</a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <a> <p id="HTMLSessionUser"></p> </a> <li class="nav-item"> <a> <form action="/logout" method="POST"> <input type="submit" class=" btn-xm" value="Logout" /> </form> </a> <a href="https://twitter.com/EvalAcademy" class="fa fa-twitter"></a> <a href="https://www.linkedin.com/company/evalacademy" class="fa fa-linkedin"></a> <a href="https://www.facebook.com/EvaluationAcademy" class="fa fa-facebook"></a> </li> </ul> </div> </nav> </div> <!--From template page--> <div class="container header"> </br> <h1>EvaluCreator</h1> <h2>Evertyhing you need to create your Evaluation plan</h2> </br> </div> <!--To develop--> <div class="container main"> <h3 class="title">Theory</h3> <div> <ul class="nav navbar-nav"> <li class="nav-item, display: inline;"> <table> <tr> <th> <div class="tool"> <form action="/Tool1Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/1_Program.jpg" alt="Tool1" height="50"></button> </form> <span class="tooltiptexticon">Background</span> </div> </th> <th> <div class="tool"> <form action="/Tool2Get" method="GET"> <button type="submit" name="" value="" class="btnicon logoactive"><img src="../img/2_Program_Initiative.jpg" alt="Tool2" height="50"></button> </form> <span class="tooltiptexticon">Initiative</span> </div> </th> <th> <div class="tool"> <form action="/Tool3Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/3_evaluaiton_history.jpg" alt="Tool3" height="50"></button> </form> <span class="tooltiptexticon">History</span> </div> </th> <th> <div class="tool"> <form action="/Tool4Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/4_Evalaution_Stakeholders.jpg" alt="Tool4" height="50"></button> </form> <span class="tooltiptexticon">Stakeholders</span> </div> </th> <th> <div class="tool"> <form action="/Tool5Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/5_Evalaution_Purpose.png" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Purpose</span> </div> </th> <th> <div class="tool"> <form action="/Tool6Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/6_Evaluation_scope.jpg" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Scope</span> </div> </th> <th> <div class="tool"> <form action="/Tool7Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/7_Data_Collection.jpg" alt="Tool7" height="50"></button> </form> <span class="tooltiptexticon">Data</span> </div> </th> <th> <div class="tool"> <form action="/Tool8Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/8_ethics.jpg" alt="Tool8" height="50"></button> </form> <span class="tooltiptexticon">Ethics</span> </div> </th> <th> <div class="tool"> <form action="/Tool9Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/9_Reporting.jpg" alt="Tool9" height="50"></button> </form> <span class="tooltiptexticon">Reporting</span> </div> </th> </tr> </table> </li> </ul> </div> <form action="/theory" method="POST"> <div> <div class="form-group">&nbsp <br /> <label for="LogicMod" class="section">Logic Model or Theory of Change</label> <p>If a logic model or theory of change already exists, drop it in here! Otherwise, use this table to articulate the program’s inputs, activities, outputs and outcomes. You don’t have to measure everything in the logic model, but it will be helpful in developing evaluation questions and choosing indicators. </p> <!--<a href="http://theimprovegroup.com/blog/2018-06/ig-ology-logic-models " target="_blank">Click here for a logic model example</a>&nbsp<span>[Upload image, PDF, or Word doc of logic model]</span>--> <textarea class="form-control" id="LogicMod" rows="10" name="LogicMod">';
          let paragr1 = '</textarea> </div> <div class="row"> <br /> <div class="col-lg"> <div class="form-group"> <br /> <label for="Situation" class="section">Situation Statement </label> <p>Describe the current state or reason the program/intervention is necessary. Be concise—aim for less than three sentences.</p> <textarea class="form-control" id="Situation" rows="10" name="Situation">';
          let paragr2 = '</textarea> </div> </div> <div class="col-lg"> <div class="form-group"> <br /> <label for="Goal" class="section">Goal Statement</label> <p>Describe the intended end state, the changes you expect to see. Be concise—aim for less than three sentences.</p> <textarea class="form-control" id="Goal" rows="10" name="Goal">';
          let paragr3 = '</textarea> </div> </div>';
          let tableheader = '<table id="TheoryTable" name="TheoryTable" class="table center"> <thead class="thead-dark"> <tr style="text-align:center"> <th scope="col" style="width:15% " rowspan="2" class="align-middle"> <div class="tool">Inputs <span class="tooltiptext"> Funding sources/ amounts, People, Infrastructure/ equipment/ supplies, Partner organizations, Program demand, Policies / procedures </span> </div> </th> <th scope="col" style="width:15% " rowspan="2" class="align-middle"> <div class="tool"> Activities <span class="tooltiptext"> Activity area 1, Partnership building, Evaluation/ quality improvement, Communication </span> </div> </th> <th scope="col" style="width:15% " rowspan="2" class="align-middle"> <div class="tool"> Ouputs <span class="tooltiptext"> # of…, # of partners involved, # of meetings held, # of PDSA cycles, # of evaluation reports produced, Website analytics, # newsletters created </span> </div> </th> <th scope="col" style="width:15% " colspan="3">Outcomes</th> <th scope="col" style="width:4% " colspan="1"></th> </tr> <tr style="text-align:center"> <th scope="col" style="width:15%" rowspan="2"> <div class="tool"> Short Term Outcomes <span class="tooltiptext"> Employees and leaders are …, Clients report … </span> </div> </th> <th scope="col" style="width:16%" rowspan="2"> <div class="tool"> Mid Term Outcomes <span class="tooltiptext"> Children and youth continue to …, Clients remain confident in … </span> </div> </th> <th scope="col" style="width:15%" rowspan="2"> <div class="tool"> Long Term Outcomes <span class="tooltiptext"> Families are …, Community leaders demonstrate … </span> </div> </th> <th scope="col" style="width:4%" rowspan="1" class="align-middle"></th> </tr> </thead> <tbody> ';
          let tablefooter = ' <tr> <td colspan="1"> <textarea class="form-control" id="inputs" rows="1" placeholder="Inputs"></textarea> </td> <td colspan="1"> <textarea class="form-control" id="activities" rows="1" placeholder="Activities"></textarea> </td> <td colspan="1"> <textarea class="form-control" id="ouputs" rows="1" placeholder="Ouputs"></textarea> </td> <td colspan="1"> <textarea class=" form-control" id="shortTerm" rows="1" placeholder="Short Term"></textarea> </td> <td colspan="1"> <textarea class="form-control" id="midTerm" rows="1" placeholder="Mid Term"></textarea> </td> <td colspan="1"> <textarea class="form-control" id="longTerm" rows="1" placeholder="Long Term"></textarea> </td> </tr></tbody> </table> </div> <div class="text-right"> <input type="button" class="btn" value="Add" onclick="addRow10()" /> <!--<input type="button" class="btn" value="Remove" onclick="deleteRow()" />--> </div>';
          let paragr4 = '<div class="form-group"> <label for="Assumptions" class="section">Assumptions</label> <!-- <p>Discussing and documenting assumptions can help to avoid confusion later and may even lead you to some important evaluation questions. Below are some common assumptions to articulate. </p>--> <p>Assumptions – are conditions that are <b>currently true</b> and must <b>remain true</b> for the success of the program or initiative. If these conditions do not currently exist but need to occur for the success of the program, then the program should plan to implement activities that will influence the necessary change. For example, if sustained funding of an initiative is needed for an initiative to occur and funding is secured then ‘sustained funding’ would be an assumption. However, if funding has not been secured and it is needed for an initiative then ‘receiving sustained funding’ should be included in the logic model as an outcome with activities that outline how that will occur. </p> <textarea class="form-control" id="Assumptions" rows="5" name="Assumptions">';
          let paragr5 = '</textarea> </div> <div class="form-group"> <br /> <label for="Factors" class="section">External Factors</label> <p>External Factors – these are factors that are beyond the control of the initiative or program. Factors should be considered along with a risk mitigation strategy for the identified factors. External factors may include environmental, political, social, etc. </p> <textarea class="form-control" id="Factors" rows="5" name="Factors">';
          let endHTML = '</textarea> </div> </div> <div class="text-right"> <input type="submit" id="query" class="btn" value="Save" /> </div> <div id="error"></div> </form> </div> <!--From template page--> <div class="container footer"> <hr> <!-- defines a thematic break in an HTML page --> <a href="https://www.evalacademy.com/"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://www.threehive.ca/our-team"> <img alt=" Three Hive Consulting Logo" src="../img/Three Hive .png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://twitter.com/EvalAcademy" class="fa fa-twitter">&nbsp</a> <a href="https://www.linkedin.com/company/evalacademy" class="fa fa-linkedin">&nbsp</a> <a href="https://www.facebook.com/EvaluationAcademy" class="fa fa-facebook">&nbsp</a> <a href="https://www.evalacademy.com/faqs" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbspFAQs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</a> <a href="https://www.evalacademy.com/contact" target="_blank">Contact Us</a> </div></body></html>'
          let pageHTML = startHTML + LogicModdData + paragr1 + SituationData + paragr2 + GoalData + paragr3 + tableheader + table + tablefooter + paragr4 + AssumptionsData + paragr5 + FactorsData + endHTML;
          res.send(pageHTML);
        }
        else {
          res.sendFile(path.join(__dirname + '/public/html/Tool2.html'));
        }
        sql.close();
      });
    });
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

      //console.log("--------------");
      //console.log(inputsHTML);
      //console.log(activitiesHTML);
      //console.log(outputsHTML);
      //console.log(shortTermHTML);
      //console.log(midTermHTML);
      //console.log(longTermHTML);
      //console.log("--------------");

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

      let sqlQuery3 = "";
      let sqlQueryTot = "";

      // if table is multiple row
      if (typeof inputsHTML == 'object') {
        var i = 0;
        activitiesHTML.forEach(element => {
          sqlQuery3 += " INSERT INTO Tool2Table (UserName, ProjectName, Inputs, Activities, Outputs, ShortTerm, MidTerm, LongTerm) VALUES ('" + userSession + "', '" + projectName + "', '" + inputsHTML[i] + "','" + activitiesHTML[i] + "','" + outputsHTML[i] + "','" + shortTermHTML[i] + "','" + midTermHTML[i] + "','" + longTermHTML[i] + "');";
          //console.log(sqlQuery3);
          i++;
        });
      }

      // if table is only one row
      else {
        sqlQuery3 = "INSERT INTO Tool2Table (UserName, ProjectName, Inputs, Activities, Outputs, ShortTerm, MidTerm, LongTerm) VALUES ('" + userSession + "', '" + projectName + "', '" + inputsHTML + "','" + activitiesHTML + "','" + outputsHTML + "','" + shortTermHTML + "','" + midTermHTML + "','" + longTermHTML + "');";
      };

      sqlQueryTot = sqlQuery2 + sqlQuery3;
      //console.log(sqlQueryTot);

      sqlRequest.query(sqlQueryTot, function (err, data) {
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
