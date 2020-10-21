const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');
//const { Console } = require('console');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());//The request data and their response data will be formated in JSON form

module.exports = function () {

    //let userSession = 'user1';
    //let projectName = 'projectU1';

    app.get('/Tool8Get', function (req, res) {

        // connect to your database
        sql.connect(config, function (err) {

            if (err) console.log(err);

            // create Request object
            var sqlRequest = new sql.Request();
            let sqlQuery = "SELECT * FROM Tool8Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

            sqlRequest.query(sqlQuery, function (err, data) {
                //console.log(sqlQuery);
                if (err) console.log(err)
                console.log(data);


                let table = "";
                var i = 0;
                data.recordset.forEach(element => {
                    table += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='ethicalRisk' value='" + data.recordset[i].EthicalRisk + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='strategy2' value='" + data.recordset[i].MitStrategy + "'></td><td><input type='button' value='-' class='btn' onclick='deleteRow(this)'/></td></tr>";
                    i++;
                });
                //console.log(table);


                //console.log(table);
                //res.send(table);
                if (data) {
                    let startHTML = '<!DOCTYPE html><html lang="en"><!--Date : --><!--Title : --><!--Description : --><!--Use "Shift" + "Alt" +"F" to justify evething --><head> <title>Ethics</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> <!-- External set up of style--> <link rel="stylesheet" type="text/css" href="../css/style.css"> <link rel="stylesheet" type="text/css" href="../css/styletable.css"> <!-- Internal set up of style--> <style type="text/css"> </style> <!-- External scripts--> <script type="text/javascript" src="../js/table.js"></script></head><body> <!--From template page--> <!--From template page--> <div class="container" style="background-color: white;"> <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: white;"> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="70"> </a> <!--<a class="navbar-brand" href="https://www.evalacademy.com/new-products">Menu</a>--> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="nav navbar-nav ml-auto"> <li class="nav-item "> <a class="nav-link active" href="./index.html">Home</a> </li> <!-- <li class="nav-item"> <a class="nav-link" href="./LoginPage.html">Login</a> </li> <li class="nav-item"> <a class="nav-link" href="./NewAccount.html">New Account</a> </li> --> <li class="nav-item"> <a class="nav-link" href="./UserSetting.html">Account Setting</a> </li> <li class="nav-item"> <a class="nav-link" href="./WelcomePage.html">Projects</a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item"> <a> <form action="/logout" method="POST"> <input type="submit" class=" btn-xm" value="Logout" /> </form> </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter"></a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin"></a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook"></a> </li> </ul> </div> </nav> </div> <!--From template page--> <div class="container header"> </br> <h1>EvaluCreator</h1> <h2>Evertyhing you need to create your Evaluation plan</h2> </br> </div> <!--To develop--> <div class="container main"> <h3 class="title">Ethics</h3> <div> <ul class="nav navbar-nav"> <li class="nav-item, display: inline;"> <table> <tr> <th> <div class="tool"> <form action="/Tool1Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/1_Program.jpg" alt="Tool1" height="50"></button> </form> <span class="tooltiptexticon">Background</span> </div> </th> <th> <div class="tool"> <form action="/Tool2Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/2_Program_Initiative.jpg" alt="Tool2" height="50"></button> </form> <span class="tooltiptexticon">Initiative</span> </div> </th> <th> <div class="tool"> <form action="/Tool3Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/3_evaluaiton_history.jpg" alt="Tool3" height="50"></button> </form> <span class="tooltiptexticon">History</span> </div> </th> <th> <div class="tool"> <form action="/Tool4Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/4_Evalaution_Stakeholders.jpg" alt="Tool4" height="50"></button> </form> <span class="tooltiptexticon">Stakeholders</span> </div> </th> <th> <div class="tool"> <form action="/Tool5Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/5_Evalaution_Purpose.png" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Purpose</span> </div> </th> <th> <div class="tool"> <form action="/Tool6Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/6_Evaluation_scope.jpg" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Scope</span> </div> </th> <th> <div class="tool"> <form action="/Tool7Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/7_Data_Collection.jpg" alt="Tool7" height="50"></button> </form> <span class="tooltiptexticon">Data</span> </div> </th> <th> <div class="tool"> <form action="/Tool8Get" method="GET"> <button type="submit" name="" value="" class="btnicon logoactive"><img src="../img/8_ethics.jpg" alt="Tool8" height="50"></button> </form> <span class="tooltiptexticon">Ethics</span> </div> </th> <th> <div class="tool"> <form action="/Tool9Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/9_Reporting.jpg" alt="Tool9" height="50"></button> </form> <span class="tooltiptexticon">Reporting</span> </div> </th> </tr> </table> </li> </ul> </div> <div> <form action="/ethics" method="POST"> <div class="form-group"> <br /> <label for="Ethics" class="section"> <label for="Background" class="section">Ethics</label> </label> <p>Describe ethical risks and strategies to mitigate them. Document any ethical review processes or approvals undertaken. Remember, the goal is to maximize benefits and minimize harms to participants and organizations. </p> </div> <div> <table id="ethicsTable" class="table"> <thead class="thead-dark"> <tr> <th scope="col">Ethical Risk</th> <th scope="col">Mitigation Strategy</th> <th scope="col"></th> </tr> </thead> <tbody>';
                    let endHTML = '<tr> <td> <select name="ethicalRisk" id="ethicalRisk" class="custom-select"> <option value="select">Select Ethical Risk</option> <option value="Risk of Emotional distress">Risk of Emotional Distress</option> <option value="Potential Stigmatization">Potential Stigmatization</option> <option value="Undue Burden">Undue Burden</option> <option value="Data Security Concerns">Data Security Concerns</option> <option value="Evaluator Conflict of Interest">Evaluator Conflict of Interest </option> <option value="A Power Relationship">A Power Relationship </option> <option value="Inexperienced Evaluator">Inexperienced Evaluator </option> <option value="Special or Vulnerable Populations">Special or Vulnerable Populations </option> <option value="An Innovative or Novel Process">An Innovative or Novel Process </option> <option value="Participant Privacy">Participant Privacy </option> <option value="Other (specify)">Other (specify)</option> </select> <!-- <br /><br /> <input type="checkbox" id="otherRisk" name="otherRisk">Other (specify)</input> <div> <br> <textarea class="form-control" id="otherRisk" name="otherRisk" rows="1" placeholder="Input Other Ethical Risk"></textarea><br> </div>--> </td> <td> <textarea class="form-control" name="strategy" id="strategy" rows="1" placeholder="Input Mitigation Strategy"></textarea> </td> </tr> </tbody> </table> </div> <div class="text-left"> <input type="button" class="btn" value="Add Row" onclick="addRow5()" /> <!-- <div id="error"></div> --> <input type="submit" class="btn" value="Save" id="query" /> <!-- <div id="error"></div> --> </div> <br /> <br /> </form> </div> </div> <!--From template page--> <div class="container footer"> <hr> <!-- defines a thematic break in an HTML page --> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </a> <a href="https://www.threehive.ca/our-team" target="_blank"> <img alt=" Three Hive Consulting Logo" src="../img/Three Hive .png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter">&nbsp</a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin">&nbsp</a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook">&nbsp</a> <a href="https://www.evalacademy.com/faqs" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbspFAQs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</a> <a href="https://www.evalacademy.com/contact" target="_blank">Contact Us</a> </div></body></html>';
                    let pageHTML = startHTML + table + endHTML;


                    res.send(pageHTML);
                    sql.close();
                }
                else {
                    res.sendFile(path.join(__dirname + '/public/html/Tool8.html'));
                }
            });
        });
    });

    app.post('/ethics', function (req, res) {
        console.log("Welcome " + userSession + " from Tool8 Page!")
        //res.send(req.body.userNameSession)=userSession;

        // connect to your database
        sql.connect(config, function (err) {

            if (err) console.log(err);

            // create Request object
            var sqlRequest = new sql.Request();

            let ethicalRiskHTML = req.body.ethicalRisk;
            let strategyHTML = req.body.strategy2;

            //console.log("--------------");
            //console.log(ethicalRiskHTML);
            //console.log(strategyHTML);
            //console.log("--------------");

            //clear previous date in table for this user and this project     
            let sqlQuery = "DELETE FROM Tool8Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

            let sqlQuery2 = "";
            let sqlQueryTot = "";
            // if table is multiple row
            if (typeof ethicalRiskHTML == 'object') {
                var i = 0;
                ethicalRiskHTML.forEach(element => {
                    sqlQuery2 += "INSERT INTO Tool8Table (UserName, ProjectName, EthicalRisk, MitStrategy) VALUES ('" + userSession + "', '" + projectName + "', '" + ethicalRiskHTML[i] + "','" + strategyHTML[i] + " ');";
                    i++;
                });
            }

            // if table is only one row
            else {
                sqlQuery2 = "INSERT INTO Tool8Table (UserName, ProjectName, EthicalRisk, MitStrategy) VALUES ('" + userSession + "', '" + projectName + "', '" + ethicalRiskHTML + "','" + strategyHTML + " ');";
            }

            letsqlQueryTot = sqlQuery + sqlQuery2;
            console.log(letsqlQueryTot);
            sqlRequest.query(letsqlQueryTot, function (err, data) {
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
