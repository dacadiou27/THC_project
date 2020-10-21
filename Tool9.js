const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');
const { Console } = require('console');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());//The request data and their response data will be formated in JSON form

module.exports = function () {

    //let userSession = 'user1';
    //let projectName = 'projectU1';

    app.get('/Tool9Get', function (req, res) {
        //app.get('/', function (req, res) {

        //let upperHTMLPage = "";
        //let lowerHTMLPage = "";
        let table1 = "";
        // connect to your database
        sql.connect(config, function (err) {


            if (err) console.log(err);

            // create Request object
            var sqlRequest = new sql.Request();
            let sqlQuery = "SELECT * FROM Tool9Table1 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";


            sqlRequest.query(sqlQuery, function (err, data) {
                //console.log(sqlQuery);
                if (err) console.log(err)
                // console.log(data);


                //let table1 = "";
                var i = 0;
                data.recordset.forEach(element => {
                    table1 += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='product' value='" + data.recordset[i].ProductT9 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='description' value='" + data.recordset[i].DescriptionT9 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='audience' value='" + data.recordset[i].AudienceT9 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='responsibility' value='" + data.recordset[i].ResponsiblityT9 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='draftDue' value='" + data.recordset[i].DraftDueT9 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='finalDue' value='" + data.recordset[i].FinalDueT9 + "'></td><td><input type='button' value='-' class='btn' onclick='deleteRow(this)'/></td></tr>";
                    i++;
                });
                sql.close();
            });

            let sqlQuery2 = "SELECT * FROM Tool9Table2 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

            sqlRequest.query(sqlQuery2, function (err, data) {
                //console.log(sqlQuery);
                if (err) console.log(err)
                //console.log(data);


                let table2 = "";
                var i = 0;
                data.recordset.forEach(element => {
                    table2 += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='product1' value='" + data.recordset[i].Product2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='description1' value='" + data.recordset[i].Description2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='audience1' value='" + data.recordset[i].Audience2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='method' value='" + data.recordset[i].Method2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='responsibility1' value='" + data.recordset[i].Responsibility2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='date1' value='" + data.recordset[i].Date2 + "'></td><td><input type='button' value='-' class='btn' onclick='deleteRow(this)'/></td></tr>";
                    i++;
                });
                //console.log(table2);

                //console.log(table);
                //res.send(table);
                if (data) {


                    let startHTML = '<!DOCTYPE html><html lang="en"><!--Date : --><!--Title : --><!--Description : --><!--Use "Shift" + "Alt" +"F" to justify evething --><head> <title>Reporting</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> <!-- External set up of style--> <link rel="stylesheet" type="text/css" href="../css/style.css"> <link rel="stylesheet" type="text/css" href="../css/styletable.css"> <!-- Internal set up of style--> <style type="text/css"> </style> <!-- External scripts--> <script type="text/javascript" src="../js/table.js"></script></head><body> <!--From template page--> <div class="container" style="background-color: white;"> <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: white;"> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="70"> </a> <!--<a class="navbar-brand" href="https://www.evalacademy.com/new-products">Menu</a>--> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="nav navbar-nav ml-auto"> <li class="nav-item "> <a class="nav-link active" href="./index.html">Home</a> </li> <!-- <li class="nav-item"> <a class="nav-link" href="./LoginPage.html">Login</a> </li> <li class="nav-item"> <a class="nav-link" href="./NewAccount.html">New Account</a> </li> --> <li class="nav-item"> <a class="nav-link" href="./UserSetting.html">Account Setting</a> </li> <li class="nav-item"> <a class="nav-link" href="./WelcomePage.html">Projects</a> </li> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item"> <a> <form action="/logout" method="POST"> <input type="submit" class=" btn-xm" value="Logout" /> </form> </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter"></a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin"></a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook"></a> </li> </ul> </div> </nav> </div> <!--From template page--> <div class="container header"> </br> <h1>EvaluCreator</h1> <h2>Evertyhing you need to create your Evaluation plan</h2> </br> </div> <!--To develop--> <div class="container main"> <h3 class="title">Reporting</h3> <div> <ul class="nav navbar-nav"> <li class="nav-item, display: inline;"> <table> <tr> <th> <div class="tool"> <form action="/Tool1Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/1_Program.jpg" alt="Tool1" height="50"></button> </form> <span class="tooltiptexticon">Background</span> </div> </th> <th> <div class="tool"> <form action="/Tool2Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/2_Program_Initiative.jpg" alt="Tool2" height="50"></button> </form> <span class="tooltiptexticon">Initiative</span> </div> </th> <th> <div class="tool"> <form action="/Tool3Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/3_evaluaiton_history.jpg" alt="Tool3" height="50"></button> </form> <span class="tooltiptexticon">History</span> </div> </th> <th> <div class="tool"> <form action="/Tool4Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/4_Evalaution_Stakeholders.jpg" alt="Tool4" height="50"></button> </form> <span class="tooltiptexticon">Stakeholders</span> </div> </th> <th> <div class="tool"> <form action="/Tool5Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/5_Evalaution_Purpose.png" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Purpose</span> </div> </th> <th> <div class="tool"> <form action="/Tool6Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/6_Evaluation_scope.jpg" alt="Tool5" height="50"></button> </form> <span class="tooltiptexticon">Scope</span> </div> </th> <th> <div class="tool"> <form action="/Tool7Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/7_Data_Collection.jpg" alt="Tool7" height="50"></button> </form> <span class="tooltiptexticon">Data</span> </div> </th> <th> <div class="tool"> <form action="/Tool8Get" method="GET"> <button type="submit" name="" value="" class="btnicon logo"><img src="../img/8_ethics.jpg" alt="Tool8" height="50"></button> </form> <span class="tooltiptexticon">Ethics</span> </div> </th> <th> <div class="tool"> <form action="/Tool9Get" method="GET"> <button type="submit" name="" value="" class="btnicon logoactive"><img src="../img/9_Reporting.jpg" alt="Tool9" height="50"></button> </form> <span class="tooltiptexticon">Reporting</span> </div> </th> </tr> </table> </li> </ul> </div> <div> <form action="/reporting" method="POST"> <div class="form-group"> <br /> <label for="Reporting" class="section"> Reporting </label> <p> Reporting can take many forms. Document all planned products including technical reports, interim reports, annual reports, final reports, slide decks, one-pagers, press releases, memos, videos, online articles or podcasts. Consider documenting the process for collaborating, reviewing and approving reporting products. <p> </div> <div> <table id="reportingTable" class="table" style="text-align: center;"> <thead class="thead-dark"> <tr> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Product <span class="tooltiptext">The format that will be appropriate for the intended audience (e.g. report, presentation, one-page overview, etc.)</span> </div> </th> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Brief Description <span class="tooltiptext">Details on the product chosen</span> </div> </th> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Audience <span class="tooltiptext">The stakeholder group identified in the stakeholder matrix </span> </div> </th> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Responsibility <span class="tooltiptext">The person responsible for disseminating the product</span> </div> </th> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Draft Due <span class="tooltiptext">The date a draft of the product is due</span> </div> </th> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Final Due <span class="tooltiptext">The date a draft of the product is due</span> </div> </th> <th scope="col" style="width:16% " rowspan="1" class="align-middle"> </th> </tr> </thead> <tbody>';
                    let btwnTableHTML = '<tr><td><textarea class="form-control" id="product" rows="1" placeholder="Product"></textarea> </td> <td> <textarea class="form-control" id="description" rows="1" placeholder="Description"></textarea> </td> <td> <textarea class="form-control" id="audience" rows="1" placeholder="Audience"></textarea> </td> <td> <textarea class="form-control" id="responsibility" rows="1" placeholder="Responsibility"></textarea> </td> <td> <input style="text-align: left;" type="date" class="form-control" id="draftDue" placeholder="Date" name="Time"></th> </td> <td> <input style="text-align: left;" type="date" class="form-control" id="finalDue" placeholder="Date" name="Time"></th> </td> </tr> </tbody> </table> </div> <div class="text-left"> <input type="button" class="btn" value="Add Row" onclick="addRow3()" /> <!-- <div id="error"></div> --> <!--<input type="submit" class="btn" id="query" value="Save" />--> <!-- <div id="error"></div> --> </div> <br /> <div class="form-group"> <label for="Communication Timeline" class="section"> Communication Timeline </label> <p> Your project communication likely involves more than just reporting products. Consider information to be shared with operational staff, recruitment materials, newsletters, progress updates, etc. You may not need both the Reporting Products and Communication Timeline sections. <p> </div> <div> <table id="communicationTable" class="table" style="text-align: center;"> <thead class="thead-dark"> <tr> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Product <span class="tooltiptext">The format that will be appropriate for the intended audience (e.g. report, presentation, one-page overview, etc.)</span> </div> </th> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Brief Description <span class="tooltiptext">Details on the product chosen</span> </div> </th> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Audience <span class="tooltiptext">The stakeholder group identified in the stakeholder matrix </span> </div> </th> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Distribution Method <span class="tooltiptext">The way the product will be disseminated to stakeholders </span> </div> </th> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Responsibility <span class="tooltiptext">The person responsible for disseminating the product</span> </div> </th> <th scope="col" style="width:16% " rowspan="2" class="align-middle"> <div class="tool">Distribution Date <span class="tooltiptext">The date the product will be distributed</span> </div> </th> <th scope="col" style="width:16% " rowspan="1" class="align-middle"> </th> </tr> </thead> <tbody>';
                    let endHTML = ' <tr> <td> <textarea class="form-control" id="product1" rows="1" placeholder="Product"></textarea> </td> <td> <textarea class="form-control" id="description1" rows="1" placeholder=" Description"></textarea> </td> <td> <textarea class="form-control" id="audience1" rows="1" placeholder="Audience"></textarea> </td> <td> <textarea class="form-control" id="method" rows="1" placeholder="Method"></textarea> </td> <td> <textarea class="form-control" id="responsibility1" rows="1" placeholder="Responsibility"></textarea> </td> <td> <input style="text-align: left;" type="date" class="form-control" id="date1" placeholder="Date" name="Time"></th> </td> </tr> </tbody> </table> </div> <div class="text-left"> <input type="button" class="btn" value="Add Row" onclick="addRow4()" /> <!-- <div id="error"></div> --> <input type="submit" class="btn" value="Save" id="query" /> <!-- <div id="error"></div> --> </div> </form> </div> <!--From template page--> <div class="container footer"> <hr> <!-- defines a thematic break in an HTML page --> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://www.threehive.ca/our-team" target="_blank"> <img alt=" Three Hive Consulting Logo" src="../img/Three Hive .png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter">&nbsp</a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin">&nbsp</a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook">&nbsp</a> <a href="https://www.evalacademy.com/faqs" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbspFAQs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</a> <a href="https://www.evalacademy.com/contact" target="_blank">Contact Us</a> </div></body></html>';
                    //lowerHTMLPage = startHTML + btwnTableHTML+ table2 + endHTML;
                    //lowerHTMLPage =  table2 + endHTML;

                    res.send(startHTML + table1 + btwnTableHTML + table2 + endHTML);
                    sql.close();
                }
                else {
                    res.sendFile(path.join(__dirname + '/public/html/Tool9.html'));
                }
            });
        });
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    app.post('/reporting', function (req, res) {
        console.log("Welcome " + userSession + " from Tool9 Page!")
        //res.send(req.body.userNameSession)=userSession;

        // connect to your database
        sql.connect(config, function (err) {

            if (err) console.log(err);

            // create Request object
            var sqlRequest = new sql.Request();

            let productHTML = req.body.product;
            let descriptionHTML = req.body.description;
            let audienceHTML = req.body.audience;
            let responsibilityHTML = req.body.responsibility;
            let draftDueHTML = req.body.draftDue;
            let finalDueHTML = req.body.finalDue;

            let product1HTML = req.body.product1;
            let description1HTML = req.body.description1;
            let audience1HTML = req.body.audience1;
            let methodHTML = req.body.method;
            let responsibility1HTML = req.body.responsibility1;
            let date1HTML = req.body.date1;

            //console.log("--------------");
            //console.log(productHTML);
            //console.log(descriptionHTML);
            //console.log(audienceHTML);
            //console.log(responsibilityHTML);
            //console.log(draftDueHTML);
            //console.log(finalDueHTML);
            //console.log("--------------");

            //console.log("--------------");
            //console.log(product1HTML);
            //console.log(description1HTML);
            //console.log(audience1HTML);
            //console.log(methodHTML);
            //console.log(responsibility1HTML);
            //console.log(date1HTML);
            //console.log("--------------");

            //First table on Tool 9
            //clear previous date in table for this user and this project     
            let sqlQuery = "DELETE FROM Tool9Table1 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ; ";

            let sqlQuery2 = "";
            let sqlQueryTot = "";
            // if table is multiple row
            if (typeof productHTML == 'object') {
                var i = 0;
                productHTML.forEach(element => {
                    sqlQuery2 += " INSERT INTO Tool9Table1 (UserName, ProjectName, ProductT9, DescriptionT9, AudienceT9, ResponsiblityT9, DraftDueT9, FinalDueT9) VALUES ('" + userSession + "', '" + projectName + "', '" + productHTML[i] + "','" + descriptionHTML[i] + "','" + audienceHTML[i] + "','" + responsibilityHTML[i] + "','" + draftDueHTML[i] + "','" + finalDueHTML[i] + " '); ";
                    i++;
                });
            }

            // if table is only one row
            else {
                sqlQuery2 = " INSERT INTO Tool9Table1 (UserName, ProjectName, ProductT9, DescriptionT9, AudienceT9, ResponsiblityT9, DraftDueT9, FinalDueT9) VALUES ('" + userSession + "', '" + projectName + "', '" + productHTML + "', '" + descriptionHTML + "', '" + audienceHTML + "', '" + responsibilityHTML + "', '" + draftDueHTML + "', '" + finalDueHTML + " '); ";
            }

            sqlQueryTot = sqlQuery + sqlQuery2;
            console.log(sqlQueryTot);

            sqlRequest.query(sqlQueryTot, function (err, data) {
                if (err) console.log(err)
                sql.close();
            });

            //Second table on Tool 9
            //clear previous date in table for this user and this project     
            let sqlQuery4 = "DELETE FROM Tool9Table2 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

            let sqlQuery5 = "";
            let sqlQueryTot2 = "";

            // if table is multiple row
            if (typeof product1HTML == 'object') {
                var i = 0;
                product1HTML.forEach(element => {
                    sqlQuery5 += " INSERT INTO Tool9Table2 (UserName, ProjectName, Product2, Description2, Audience2, Method2, Responsibility2, Date2) VALUES ('" + userSession + "', '" + projectName + "', '" + product1HTML[i] + "','" + description1HTML[i] + "','" + audience1HTML[i] + "','" + methodHTML[i] + "','" + responsibility1HTML[i] + "','" + date1HTML[i] + " '); ";
                    i++;
                });
            }

            // if table is only one row
            else {
                sqlQuery5 = " INSERT INTO Tool9Table2 (UserName, ProjectName, Product2, Description2, Audience2, Method2, Responsibility2, Date2) VALUES ('" + userSession + "', '" + projectName + "', '" + product1HTML + "','" + description1HTML + "','" + audience1HTML + "','" + methodHTML + "','" + responsibility1HTML + "','" + date1HTML + " '); ";
            }
            sqlQueryTot2 = sqlQuery4 + sqlQuery5;
            console.log(sqlQueryTot2);

            sqlRequest.query(sqlQueryTot2, function (err, data) {
                if (err) console.log(err)
                sql.close();
            });
        });
    });

    return app;
};

//var server = app.listen(5000, function () {
//    console.log('Server is running..');
//});



