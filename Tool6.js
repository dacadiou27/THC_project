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
  app.get('/Tool6Get', function (req, res) {
    //to work locally
    //app.get('/', function (req, res) {
    let upperHTMLPage = "";
    let lowerHTMLPage = "";

    // connect to your database
    sql.connect(config, function (err) {
      if (err) console.log(err);
      // Get and dispaly user data from database- create Request object
      var sqlRequest = new sql.Request();
      let sqlQuery = "SELECT EvalScope FROM dbo.Projects WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
      //console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        //console.log(data + " data from SQL");
        //console.log(data.recordset[0].EvalScope + " data - EvalScope from SQL");
        let EvalScopeData = data.recordset[0].EvalScope;

        if (data) {
          let startHTML = '<!DOCTYPE html><html lang="en"><!--Date : --><!--Title : --><!--Description : --><!--Use "Shift" + "Alt" +"F" to justify evething --><head> <title>Evaluation Scope</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel=”stylesheet” href=”css/bootstrap.css”> <link rel=”stylesheet” href=”css/bootstrap-responsive.css”> <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> <!-- External set up of style--> <link rel="stylesheet" type="text/css" href="../css/style.css"> <link rel="stylesheet" type="text/css" href="../css/styletable.css"> <!-- Internal set up of style--> <style type="text/css"> .div2 { /*border-style: solid; border-color: blueviolet; border-radius: 5px;*/ text-align: left; padding-top: 10px; height: 40px; width: 60px; } input[type="text"] { font-size: small; font-family: "Tenor Sans", sans-serif; height: 40px; } </style></head><body> <!--From template page--> <div class="container" style="background-color: white;"> <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: white;"> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="70"> </a> <!--<a class="navbar-brand" href="https://www.evalacademy.com/new-products">Menu</a>--> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="nav navbar-nav ml-auto"> <li class="nav-item "> <a class="nav-link active" href="./index.html">Home</a> </li> <!-- <li class="nav-item"> <a class="nav-link" href="./LoginPage.html">Login</a> </li> <li class="nav-item"> <a class="nav-link" href="./NewAccount.html">New Account</a> </li> --> <li class="nav-item"> <a class="nav-link" href="./UserSetting.html">Account Setting</a> </li> <li class="nav-item"> <a class="nav-link" href="./WelcomePage.html">Projects</a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item"> <a> <form action="/logout" method="POST"> <input type="submit" class=" btn-xm" value="Logout" /> </form> </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter"></a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin"></a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook"></a> </li> </ul> </div> </nav> </div> <!--From template page--> <div class="container header"> </br> <h1>EvaluCreator</h1> <h2>Evertyhing you need to create your Evaluation plan</h2> </br> </div> <!--To develop--> <div class="container main"> <h3 class="title">Evaluation Focus</h3> <div> <ul class="nav navbar-nav"> <li class="nav-item, display: inline;"> <table> <tr> <th> <div class="tool"> <form action="/Tool1Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/1_Program.jpg" alt="Tool1" height="50"></button> </form> <span class="tooltiptexticon">Background</span> </div> </th> <th> <div class="tool"> <form action="/Tool2Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/2_Program_Initiative.jpg" alt="Tool2" height="50"></button> </form> <span class="tooltiptexticon">Initiative</span> </div> </th> <th> <div class="tool"> <form action="/Tool3Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/3_evaluaiton_history.jpg" alt="Tool3" height="50"></button> </form> <span class="tooltiptexticon">History</span> </div> </th> <th> <div class="tool"> <form action="/Tool4Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/4_Evalaution_Stakeholders.jpg" alt="Tool4" height="50"></button> </form> <span class="tooltiptexticon">Stakeholders</span> </div> </th> <th> <div class="tool"> <form action="/Tool5Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/5_Evalaution_Purpose.png" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Purpose</span> </div> </th> <th> <div class="tool"> <form action="/Tool6Get" method="GET"> <button type="submit" name="" value="" class="btnicon logoactive"><img src="../img/6_Evaluation_scope.jpg" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Scope</span> </div> </th> <th> <div class="tool"> <form action="/Tool7Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/7_Data_Collection.jpg" alt="Tool7" height="50"></button> </form> <span class="tooltiptexticon">Data</span> </div> </th> <th> <div class="tool"> <form action="/Tool8Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/8_ethics.jpg" alt="Tool8" height="50"></button> </form> <span class="tooltiptexticon">Ethics</span> </div> </th> <th> <div class="tool"> <form action="/Tool9Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/9_Reporting.jpg" alt="Tool9" height="50"></button> </form> <span class="tooltiptexticon">Reporting</span> </div> </th> </tr> </table> </li> </ul> </div> <br> <div> <form action="/scope" method="POST"> <div class="form-group"> <label for="scope" class="section">Evaluation Scope</label> <p>You can’t evaluate everything—a successful project needs some boundaries. What time period are you examining? Which sites? Which program(s)? Defining scope in your evaluation plan will help keep you on track. Scope creep is real, and it can lead to conflicts between evaluation sponsors and practitioners. This section gives you a basis upon which to base “but can we also...” and “oh, but what about...” discussions.</p> <textarea class="form-control" id="evalScope" rows="10" name="scopedesc">';
          let endHTML = '</textarea> </div> <div class="text-right"> <!--<input type="button" class="btn" value="Save" />--> <input type="submit" id="query" class="btn" value="Save" /> </div> <div id="error"></div> </form>';
          upperHTMLPage = startHTML + EvalScopeData + endHTML;
          //res.send(upperHTMLPage);
          sql.close();
        }

        else {
          res.sendFile(path.join(__dirname + '/public/html/Tool6.html'));
        }
      });
    });

    sql.connect(config, function (err) {

      if (err) console.log(err);

      /*// create Request object*/
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
        let R1SQL = data.recordset[0].Reason;
        let R2SQL = data.recordset[1].Reason;
        let R3SQL = data.recordset[2].Reason;
        let R4SQL = data.recordset[3].Reason;
        let R5SQL = data.recordset[4].Reason;
        let R6SQL = data.recordset[5].Reason;
        let R7SQL = data.recordset[6].Reason;

        if (data) {
          let Q1 = '<div class="form-group"> <label for="Background" class="section">Evaluation Questions</label> <p>Specify the key overarching evaluation questions that the evaluation will seek to answer and explain the rationale for their selection. Evaluation questions are informed by the purpose of the evaluation and together should tell a high-level story of the initiative being evaluated. </p> <ul> <li> <p>Evaluative – questions should focus on the merit, worth or significance of a program or initiative (not on a single data point like survey questions)</p> </li> <li> <p>Specific – questions should clearly identify what will be investigated in the evaluation; therefore, helping define the boundaries for the evaluation </p> </li> <li> <p>Pertinent – questions should align with the evaluation purpose (do the questions tell the evaluation users what they want to know?)</p> </li> </ul> <p>In the next section you will identify sub-questions and indicators to help you develop indicators and data collection methods for these questions. </p> </div> <div class="container"> <form action="/scope2" method="POST"> <div class="row"> <div class="col-6"> <div> <input style="text-align: left;" type="text" class="form-control" id="EvalQ1" placeholder="Type Evaluation Question" name="Q" value="';
          let Q2 = '"></div> <div > <input style="text-align: left;" type="text" class="form-control" id="EvalQ2" placeholder="Type Evaluation Question" name="Q" value="';
          let Q3 = '"></div> <div > <input style="text-align: left;" type="text" class="form-control" id="EvalQ3" placeholder="Type Evaluation Question" name="Q" value="';
          let Q4 = '"></div> <div> <input style="text-align: left;" type="text" class="form-control" id="EvalQ4" placeholder="Type Evaluation Question" name="Q" value="';
          let Q5 = '"></div> <div> <input style="text-align: left;" type="text" class="form-control" id="EvalQ5" placeholder="Type Evaluation Question" name="Q" value="';
          let Q6 = '"></div> <div> <input style="text-align: left;" type="text" class="form-control" id="EvalQ6" placeholder="Type Evaluation Question" name="Q" value="';
          let Q7 = '"></div> <div> <input style="text-align: left;" type="text" class="form-control" id="EvalQ7" placeholder="Type Evaluation Question" name="Q" value="';
          let R1 = '"></div> </div> <div class="col-6"> <div><input style="text-align: left;" type="text" class="form-control" id="Reason1" placeholder="Type Reason" name="R" value="';
          let R2 = '"></div> <div><input style="text-align: left;" type="text" class="form-control" id="Reason2" placeholder="Type Reason" name="R" value="';
          let R3 = '"></div> <div><input style="text-align: left;" type="text" class="form-control" id="Reason3" placeholder="Type Reason" name="R" value="';
          let R4 = '"></div> <div><input style="text-align: left;" type="text" class="form-control" id="Reason4" placeholder="Type Reason" name="R" value="';
          let R5 = '"></div> <div><input style="text-align: left;" type="text" class="form-control" id="Reason5" placeholder="Type Reason" name="R" value="';
          let R6 = '"></div> <div><input style="text-align: left;" type="text" class="form-control" id="Reason6" placeholder="Type Reason" name="R" value="';
          let R7 = '"></div> <div><input style="text-align: left;" type="text" class="form-control" id="Reason7" placeholder="Type Reason" name="R" value="';
          endHTML = '"></div> </div> <div class="text-right"> <br> <input type="submit" id="query" class="btn" value="Save" /> </div> <div id="error"></div> </div> </form> </div> </div> </div> <!--From template page--> <div class="container footer"> <hr> <!-- defines a thematic break in an HTML page --> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://www.threehive.ca/our-team" target="_blank"> <img alt=" Three Hive Consulting Logo" src="../img/Three Hive .png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter">&nbsp</a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin">&nbsp</a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook">&nbsp</a> <a href="https://www.evalacademy.com/faqs" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbspFAQs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</a> <a href="https://www.evalacademy.com/contact" target="_blank">Contact Us</a> </div></body></html>';
          lowerHTMLPage = Q1 + Q1SQL + Q2 + Q2SQL + Q3 + Q3SQL + Q4 + Q4SQL + Q5 + Q5SQL + Q6 + Q6SQL + Q7 + Q7SQL + R1 + R1SQL + R2 + R2SQL + R3 + R3SQL + R4 + R4SQL + R5 + R5SQL + R6 + R6SQL + R7 + R7SQL + endHTML;

          //res.send(lowerHTMLPage);
          res.send(upperHTMLPage + lowerHTMLPage);
          sql.close();

        }
        else {
          res.sendFile(path.join(__dirname + '/public/html/Tool6.html'));
        }
      });

    });
    //res.send(upperHTMLPage + lowerHTMLPage);
  });


  //EvalutionScope input to database
  app.post('/scope', function (req, res) {
    console.log("Welcome " + userSession + " from Tool6 Page!")

    // connect to your database
    sql.connect(config, function (err) {
      if (err) console.log(err);

      // create Request object
      var sqlRequest = new sql.Request();
      let EvalScopeHTML = req.body.scopedesc;
      //console.log(EvalScopeHTML + ' from HTML');
      let sqlQuery = "UPDATE dbo.Projects SET EvalScope = '" + EvalScopeHTML + "' WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
      //console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        //console.log(data);

        /*
        if (data) {res.redirect('/html/Tool6.html')}
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

      var y;
      i = 0;
      for (y of RHTML) {
        console.log(y);
        sqlQuery2 += " INSERT INTO Tool6Table (UserName, ProjectName, EvalQ, Reason) VALUES ('" + userSession + "', '" + projectName + "', '" + QHTML[i] + "','" + RHTML[i] + "'); ";
        i++;
      }

      console.log(sqlQuery2);
      sqlRequest.query(sqlQuery2, function (err, data) {
        if (err) console.log(err)
        //console.log(data);
        sql.close();
      });


    });

  });

  return app;
};

/*var server = app.listen(5000, function () {
  console.log('Server is running..');
});*/
