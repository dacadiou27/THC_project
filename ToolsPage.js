const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');
//var session = require('./session.js');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());//The request data and ther response data will be formated in JSON form


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function () {

  //let userSession = 'user1';
  //let projectName = 'projectU1';

  app.get('/toolsPage', function (req, res) {

    //projectName =  req.body.project;

    console.log("Welcome " + userSession + " from ToolsPage! ")
    console.log("Welcome in " + projectName + " from ToolsPage! ")
    
    sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      var sqlRequest = new sql.Request();
      let sqlQuery = "SELECT * FROM dbo.Projects WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
      //console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err)
        //console.log(data);
        //console.log(data.recordset);

        let startHTML = '<!DOCTYPE html><html lang="en"><head> <title>Project Tools</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> <script> function clear() { document.getElementById("FName").value = ""; document.getElementById("LName").value = ""; document.getElementById("Email").value = ""; } </script> <!-- External set up of style--> <link rel="stylesheet" type="text/css" href="../css/style.css"> <link rel="stylesheet" type="text/css" href="../css/styletable.css"> <!-- Internal set up of style--> <style type="text/css"> </style></head><!--displays last edited time- id Date id time line --><body onload="clear();"> <!--From template page--> <div class="container" style="background-color: white;"> <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: white;"> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="70"> </a> <!--<a class="navbar-brand" href="https://www.evalacademy.com/new-products">Menu</a>--> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="nav navbar-nav ml-auto"> <li class="nav-item "> <a class="nav-link active" href="./index.html">Home</a> </li> <!-- <li class="nav-item"> <a class="nav-link" href="./LoginPage.html">Login</a> </li> <li class="nav-item"> <a class="nav-link" href="./NewAccount.html">New Account</a> </li>--> <li class="nav-item"> <a class="nav-link" href="./UserSetting.html">Account Setting</a> </li> <li class="nav-item"> <a class="nav-link" href="./WelcomePage.html">Projects</a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item"> <a> <form action="/logout" method="POST"> <input type="submit" class=" btn-xm" value="Logout" /> </form> </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter"></a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin"></a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook"></a> </li> </ul> </div> </nav> </div> <!--From template page--> <div class="container header"> </br> <h1>EvaluCreator</h1> <h2>Evertyhing you need to create your Evaluation plan</h2> </br> </div> <!--To develop--> <div class="container main"> </br> <h3 class="title">Project Tools</h3> <div class="row justify-content-between"> <div class="col-md-6 services-section"> <br /> <h4>Evaluation Tools</h4> <br> <table> <tr> <!--<th class="logoactive"><img src="../img/1_Program.jpg" alt="Progam" class="image" height="50"> </th> <th><a href="./Tool1.html">Background</a></th>--> <th> <form action="/Tool1Get" method="GET"> <button type="submit" name="" value="" class="btnicon"><img src="../img/1_Program.jpg" alt="Tool1" height="50"></button> </form> </th> <th>Background</th> </tr> <tr> <!--<th class="logoactive"><img src="../img/2_Program_Initiative.jpg" height="50"></th> <th><a href="./Tool2.html">Theory</a></th>--> <th> <form action="/Tool2Get" method="GET"> <button type="submit" name="" value="" class="btnicon"><img src="../img/2_Program_Initiative.jpg" alt="Tool2" height="50"></button> </form> </th> <th>Theory</th> </tr> <tr> <!--<th class="logoactive"><img src="../img/3_evaluaiton_history.jpg" height="50"></th> <th><a href="./Tool3.html">Evaluation History</a></th>--> <th> <form action="/Tool3Get" method="GET"> <button type="submit" name="" value="" class="btnicon"><img src="../img/3_evaluaiton_history.jpg" alt="Tool3" height="50"></button> </form> </th> <th>Evaluation History</th> </tr> <tr> <!--<th class="logoactive"><img src="../img/4_Evalaution_Stakeholders.jpg" height="50"></th> <th><a href="./Tool4.html">Stakeholder Matrix</a></th>--> <th> <form action="/Tool4Get" method="GET"> <button type="submit" name="" value="" class="btnicon"><img src="../img/4_Evalaution_Stakeholders.jpg" alt="Tool4" height="50"></button> </form> </th> <th>Stakeholder Matrix</th> </tr> <tr> <!--<th class="logoactive"><img src="../img/5_Evalaution_Purpose.png" height="50"></th> <th><a href="./Tool5.html">Purpose and Use</a></th>--> <th> <form action="/Tool5Get" method="GET"> <button type="submit" name="" value="" class="btnicon"><img src="../img/5_Evalaution_Purpose.png" alt="Tool5" height="50"></button> </form> </th> <th>Purpose and Use</th> </tr> <tr> <th> <form action="/Tool6Get" method="GET"> <button type="submit" name="" value="" class="btnicon"><img src="../img/6_Evaluation_scope.jpg" alt="Tool6" height="50"></button> </form> </th> <th>Evaluation Focus</th> </tr> <tr> <!--<th class="logoactive"><img src="../img/7_Data_Collection.jpg" height="50"></th> <th><a href="./Tool7.html">Data Collection</a></th>--> <th> <form action="/Tool7Get" method="GET"> <button type="submit" name="" value="" class="btnicon"><img src="../img/7_Data_Collection.jpg" alt="Tool7" height="50"></button> </form> </th> <th>Data Collection</th> </tr> <tr> <!--<th class="logoactive"><img src="../img/8_ethics.jpg" height="50"></th> <th><a href="./Tool8.html">Ethics</a></th>--> <th> <form action="/Tool8Get" method="GET"> <button type="submit" name="" value="" class="btnicon"><img src="../img/8_ethics.jpg" alt="Tool8" height="50"></button> </form> </th> <th>Ethics</th> </tr> <tr> <!--<th class="logoactive"><img img src="../img/9_Reporting.jpg" height="50"></th> <th><a href="./Tool9.html">Reporting</a></th>--> <th> <form action="/Tool9Get" method="GET"> <button type="submit" name="" value="" class="btnicon"><img src="../img/9_Reporting.jpg" alt="Tool9" height="50"></button> </form> </th> <th>Reporting</th> </tr> </table> </div> <div class="col-md-6 services-section"> <br /> <h4>Project Overview</h4> <br> <table style="width:100%;"> <tr> <th>Project Name:</th> <th>';
        let midHTML1 = '</th> </tr> <!--<tr> <th>Tools Used:</th> <th> <p id="listTools"></p> </th> <th></th> </tr> <tr> <th>List Collaboartors:</th> <th> <p id="listMembers"></p> </th> <th></th> </tr>--> <tr> <th> Organization:</th> <th>';
        let midHTML2 = '</th> </tr> <tr> <th>Created Date:</th> <!-- THis is in the body- autoload defined in JS file--> <th>';
        let endHTML = ' </th> </tr> <tr> <form action="/viewDocument" method="GET"> <th colspan="3" style="text-align: center"> <button type="submit" class="btn">View Document</button> </th> </form> </tr> </table> <br> <br> <!--<h4>Invite Collaborators</h4> <br> <table style="width:100%"> <tr> <th>First Name:</th> <th><input style="text-align: center;" type="text" class="form-control" id="FName" placeholder="First Name" name="FName" size="40"></th> <th></th> </tr> <tr> <th>Last Name:</th> <th><input style="text-align: center;" type="text" class="form-control" id="LName" placeholder="Last Name" name="LName" size="40"></th> <th></th> </tr> <tr> <th>Email:</th> <th><input style="text-align: center;" type="email" class="form-control" id="Email" placeholder="Email" name="Email" size="40"></th> <th><button type="button" class="btn" onclick="AddEmail();">Add</button></th> </tr> <tr> <th>List Collaboartors:</th> <th colspan="2"> <div id="GetMembers" style="text-align: center;"></div> </th> <th></th> </tr> <tr> <th></th> <th colspan="1" style="text-align: center"><button type="button" class="btn" onclick="SendInvite();">Send Invite(s)</button></th> <th colspan="1" style="text-align: center"><button type="button" class="btn" onclick="Clear();">Clear</button></th> </tr> </table>--> </div> </div> </div> <br> <!--From template page--> <div class="container footer"> <hr> <!-- defines a thematic break in an HTML page --> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://www.threehive.ca/our-team" target="_blank"> <img alt=" Three Hive Consulting Logo" src="../img/Three Hive .png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter">&nbsp</a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin">&nbsp</a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook">&nbsp</a> <a href="https://www.evalacademy.com/faqs" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbspFAQs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</a> <a href="https://www.evalacademy.com/contact" target="_blank">Contact Us</a> </div></body></html>';
        let pageHTML = startHTML + data.recordset[0].ProjectName + midHTML1 + data.recordset[0].Organization + midHTML2 + data.recordset[0].StartDate + endHTML;
        res.send(pageHTML);
        sql.close();
      });
    });
  });

  return app;
}

//app.get('/', urlencodedParser, function (req, res) {
// res.send(req.query.userSession);
//res.send('Welcome, ' + userSession + req.body.userSession)
//})

//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});

