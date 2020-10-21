const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/public/html')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());//The request data and their response data will be formated in JSON form

module.exports = function () {

  app.get('/newProject', function (req, res) {
    //userSession="user1";

    htmlProject = '<!DOCTYPE html><html lang="en"><!--Date : 10/09/2020--><!--Title : Create a New Project--><!--Description : --><!--Use "Shift" + "Alt" +"F" to justify evething --><head> <title>New Project</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> <!-- External set up of style--> <link rel="stylesheet" type="text/css" href="../css/style.css"> <link rel="stylesheet" type="text/css" href="../css/styletable.css"> <!-- Internal set up of style--> <style type="text/css"> </style></head><body> <!--From template page--> <div class="container" style="background-color: white;"> <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: white;"> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="70"> </a> <!--<a class="navbar-brand" href="https://www.evalacademy.com/new-products">Menu</a>--> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="nav navbar-nav ml-auto"> <li class="nav-item "> <a class="nav-link active" href="./index.html">Home</a> </li> <!-- <li class="nav-item"> <a class="nav-link" href="./LoginPage.html">Login</a> </li> <li class="nav-item"> <a class="nav-link" href="./NewAccount.html">New Account</a> </li>--> <li class="nav-item"> <a class="nav-link" href="./UserSetting.html">Account Setting</a> </li> <li class="nav-item"> <a class="nav-link" href="./WelcomePage.html">Projects</a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item"> <a> <form action="/logout" method="POST"> <input type="submit" class=" btn-xm" value="Logout" /> </form> </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter"></a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin"></a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook"></a> </li> </ul> </div> </nav> </div> <!--From template page--> <div class="container header"> </br> <h1>EvaluCreator</h1> <h2>Evertyhing you need to create your Evaluation plan</h2> </br> </div> <!--To develop--> <div class="container main"> <br /> <h3 class="title">New Project</h3> <form action="/newProject" method="post"> <!--The form-handler is typically a file on the server with a script for processing input data. The form-handler is specified in the form s "action" attribute.--> <div class=" form-group"> <label for="projectName" class="form-check-label">Project Name:</label> <input type="text" class="form-control" id="projectName" name="projectName"> </div> <div class="form-group"> <label for="org" class="form-check-label">Organization/Institution Name:</label> <input type="text" class="form-control" id="org" name="org"> </div> <div class="form-group"> <label for="dateStarted" class="form-check-label">Date Started:</label> <input type="Date" class="form-control" id="dateStarted" placeholder="DD-MM-YYYY" name="dateStarted"> </div> <input type="reset" class="btn" value="Reset Form"> <input type="submit" id="query" class="btn" value="Create Project" /> <!--The <input type="submit"> defines a button for submitting the form data to a form-handler.--> </div> </form> <br> <hr> </div> <!--From template page--> <div class="container footer"> <h1></h1> <a href="https://www.evalacademy.com/"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://www.threehive.ca/our-team"> <img alt=" Three Hive Consulting Logo" src="../img/Three Hive .png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://twitter.com/EvalAcademy" class="fa fa-twitter">&nbsp</a> <a href="https://www.linkedin.com/company/evalacademy" class="fa fa-linkedin">&nbsp</a> <a href="https://www.facebook.com/EvaluationAcademy" class="fa fa-facebook">&nbsp</a> <a href="https://www.evalacademy.com/faqs" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbspFAQs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</a> <a href="https://www.evalacademy.com/contact" target="_blank">Contact Us</a> </div> <br></body></html>';
    res.send(htmlProject);
    //res.sendFile(path.join(__dirname + '/public/html/NewProject.html'));
  });

  app.post('/newProject', function (req, res) {
    console.log("Welcome " + userSession + " from NewProject Page!")
    // connect to your database
    sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var sqlRequest = new sql.Request();

      ////////
      //let userName = 'user1';
      let userName = userSession;
      let projectName = req.body.projectName;
      let org = req.body.org;
      let dateStarted = req.body.dateStarted;
      let email = req.body.email;
      //////

      let sqlQuery = " INSERT INTO dbo.Projects (UserName, ProjectName, Organization, StartDate, CollabEmail, Background, EvalHistory, PurposeUse) VALUES ('" + userName + "', '" + projectName + "', '" + org + "', '" + dateStarted + "', '" + email + "', '','','');";


      //console.log(sqlQuery);
      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) {
          console.log(err);
          res.send('Incorrect Input!');
          //sql.close();
        }
        //console.log(data);
        else {

          //res.redirect('/html/WelcomePage.html');
          //res.send(welcomePage());
          ////////////////////////////////////////////
          
          sql.connect(config, function (err) {
            if (err) console.log(err);
            // create Request object
            var sqlRequest = new sql.Request();
            let sqlQuery2 = "SELECT ProjectName FROM dbo.Projects WHERE UserName = '" + userSession + "';";
            //console.log(sqlQuery);

            sqlRequest.query(sqlQuery2, function (err, data) {
              if (err) console.log(err)
              //console.log(data);
              //console.log(data.recordset);

              if (data) {
                var li = "";
                data.recordset.forEach(element => {
                  //console.log(element.ProjectName);
                  li = li + '<button type="submit" name="" value="" class="btnproject"  onclick="Func' + element.ProjectName + '()"> <b>' + element.ProjectName + '<b> </button></li></br></br><script>function Func' + element.ProjectName + '() {projectName = ' + element.ProjectName + '}</script>';
                })
                let startHTML = '<!DOCTYPE html><html lang="en"><!--Date : --><!--Title : --><!--Description : --><!--Use "Shift" + "Alt" +"F" to justify evething --><head> <title>My Projects</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> <!-- External set up of style--> <link rel="stylesheet" type="text/css" href="../css/style.css"> <link rel="stylesheet" type="text/css" href="../css/styletable.css"> <!-- Internal set up of style--> <style type="text/css"> .tooltiptext { width: 100%; } </style></head><body> <!--From template page--> <div class="container" style="background-color: white;"> <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: white;"> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="70"> </a> <!--<a class="navbar-brand" href="https://www.evalacademy.com/new-products">Menu</a>--> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="nav navbar-nav ml-auto"> <li class="nav-item "> <a class="nav-link active" href="./index.html">Home</a> </li> <!-- <li class="nav-item"> <a class="nav-link" href="./LoginPage.html">Login</a> </li> <li class="nav-item"> <a class="nav-link" href="./NewAccount.html">New Account</a> </li>--> <li class="nav-item"> <a class="nav-link" href="./UserSetting.html">Account Setting</a> </li> <li class="nav-item"> <a class="nav-link" href="./WelcomePage.html">Projects</a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item"> <a> <form action="/logout" method="POST"> <input type="submit" class=" btn-xm" value="Logout" /> </form> </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter"></a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin"></a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook"></a> </li> </ul> </div> </nav> </div> <!--From template page--> <div class="container header"> </br> <h1>EvaluCreator</h1> <h2>Evertyhing you need to create your Evaluation plan</h2> </br> </div> <div class="container main"> <div class="row"> <div class="col-sm-4"> </br> <h3 style="padding-top: 10px;" class="title">Table of Contents</h3> <br> <div> <div> <table> <tr> <th class="logoactive"><img src="../img/1_Program.jpg" alt="Progam" class="image" height="50"> </th> <th> <div class="tool">Background <span class="tooltiptext">The background section orients the reader to the program/initiative that is being evaluated and identifies the initiative’s history, including when, where, why and for whom it was started</span> </div> </th> </tr> <tr> <th class="logoactive"><img src="../img/2_Program_Initiative.jpg" height="50"></th> <th> <div class="tool">Theory <span class="tooltiptext">The theory section includes details about the program/initiative that will be evaluated, including the specific goals the program/initiative is designed to bring about and how the program/initiative will achieve those goals</span> </div> </th> </tr> <tr> <th class="logoactive"><img src="../img/3_evaluaiton_history.jpg" height="50"></th> <th> <div class="tool">Evaluation History <span class="tooltiptext">The evaluation history section identifies previous evaluations that have been conducted and how those evaluations influenced this evaluation’s planning and implementation</span> </div> </th> </tr> <tr> <th class="logoactive"><img src="../img/4_Evalaution_Stakeholders.jpg" height="50"></th> <th> <div class="tool">Stakeholder Matrix <span class="tooltiptext">The evaluation matrix outlines a) who needs to be involved in the evaluation, b) for what purpose, and; c) how they can be involved in the evaluation</span> </div> </th> </tr> <tr> <th class="logoactive"><img src="../img/5_Evalaution_Purpose.png" height="50"></th> <th> <div class="tool">Purpose and Use <span class="tooltiptext">The purpose and use section should identify why the evaluation is being conducted (purpose) and how the results are intended to be used (use)</span> </div> </th> </tr> <tr> <th class="logoactive"><img src="../img/6_Evaluation_scope.jpg" height="50"></th> <th> <div class="tool">Evaluation Focus <span class="tooltiptext">The evaluation focus identifies the boundaries of the evaluation in terms of time period, location, and the specific program/initiative components that will be evaluated</span> </div> </th> </tr> <tr> <th class="logoactive"><img src="../img/7_Data_Collection.jpg" height="50"></th> <th> <div class="tool">Data Collection <span class="tooltiptext">The data collection section describes what, when and how data will be collected to answer the evaluation questions</span> </div> </th> </tr> <tr> <th class="logoactive"><img src="../img/8_ethics.jpg" height="50"></th> <th> <div class="tool">Ethics <span class="tooltiptext">The ethics section identifies the potential risks the evaluation may pose to people and strategies to mitigate the risks</span> </div> </th> </tr> <tr> <th class="logoactive"><img img src="../img/9_Reporting.jpg" height="50"></th> <th> <div class="tool">Reporting <span class="tooltiptext">The reporting section identifies who results will be communicated to, in which format and according to what timeline</span> </div> </th> </tr> </table> </div> </div> </div> <div class="col-sm-8"> <div style="text-align:center"> </br> <h3 style="padding-top:10px; " class="title">My Projects</h3> </br></br> <form action="/toolsPage" method="GET"><ul id="projectsList" style="list-style-type:none"> <!--<li><a href="./ToolsPage.html">Project A</a>--></li> </br></br>';
                let endHTML = ' </ul></form></br></br> </br></br>  <form action="/newProject" method="GET"> <button type="submit" class="btn btn-lg"><a href="./NewProject.html"> Start New Project</a></button> </form> </div> </div> </div> </div> <!--From template page--> <div class="container footer"> <hr> <!-- defines a thematic break in an HTML page --> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://www.threehive.ca/our-team" target="_blank"> <img alt=" Three Hive Consulting Logo" src="../img/Three Hive .png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter">&nbsp</a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin">&nbsp</a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook">&nbsp</a> <a href="https://www.evalacademy.com/faqs" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbspFAQs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</a> <a href="https://www.evalacademy.com/contact" target="_blank">Contact Us</a> </div></body></html>';
                let pageHTML = startHTML + li + endHTML;

                console.log(projectName + "from Dany");
                res.send(pageHTML);
                sql.close();
              }
            });
          });
          ////////////////////////////////////////////
          return (userSession);
        }
        //res.end();
        sql.close();
      });
    });
  });

  return app;
}

//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});
