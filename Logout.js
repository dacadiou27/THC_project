const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/public/html')));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());//The request data and their response data will be formated in JSON form

module.exports = function () {

  app.post('/logout', function (req, res) {
    console.log("Goodbye " + userSession + "!")
    userSession = "";
    projectSession = "";
    htmlLogin='<!DOCTYPE html><html lang="en"><!--Date : --><!--Title : --><!--Description : --><!--Use "Shift" + "Alt" +"F" to justify evething --><head> <title>Welcome Page</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"> <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> <!-- External set up of style--> <link rel="stylesheet" type="text/css" href="../css/style.css"> <link rel="stylesheet" type="text/css" href="../css/styletable.css"> <!-- Internal set up of style--> <style type="text/css"> </style></head><body> <!--From template page--> <div class="container" style="background-color: white;"> <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: white;"> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="70"> </a> <!--<a class="navbar-brand" href="https://www.evalacademy.com/new-products">Menu</a>--> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarNavDropdown"> <ul class="nav navbar-nav ml-auto"> <li class="nav-item "> <a class="nav-link active" href="./index.html">Home</a> </li> <li class="nav-item"> <a class="nav-link" href="./LoginPage.html">Login</a> </li> <li class="nav-item"> <a class="nav-link" href="./NewAccount.html">New Account</a> </li> <!-- <li class="nav-item"> <a class="nav-link" href="./UserSetting.html">Account Setting</a> </li> <li class="nav-item"> <a class="nav-link" href="./WelcomePage.html">Projects</a> </li> --> </ul> <ul class="nav navbar-nav ml-auto"> <li class="nav-item"> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter"></a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin"></a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook"></a> </li> </ul> </div> </nav> </div> <!--From template page--> <div class="container header"> </br> <h1>EvaluCreator</h1> <h2>Evertyhing you need to create your Evaluation plan</h2> </br> </div> <div class="container main"> <div class="container "> <br> <h3 class="title">How it Works </h3> <br> <!--<div style="margin-left: 30%;">--> <div > 1. Set up all your projects in one space</br> 2. Enter your project information step-by-step</br> 3. Collobrate with your team to build your evaluation plan</br> 4. Export your evalution plan and start evaluating</br> </div> </br> </div> <div class="container"> <br> <h3 class="title">Getting Started </h3> <br> <span class="psw">Already have an account? <a href="./html/LoginPage.html" style="color: #670061;">Login</a></span> <br> <span class="psw">Need an account?<a href="./html/NewAccount.html" style="color: #670061;"> Create Account</a></span> </br></br> </div> <div class="container"> <br> <h3 class="title">Need More Help?</h3> </br> Click on the link below to Connect with a Consultant to get direct support with your evaluation. <span class="psw">Direct Support at<a href="https://eval-academy.teachable.com/" style="color: #670061;"> EvalAcademy</a></span> <br><br> </div> </div> <!--From template page--> <div class="container footer" <hr> <!-- defines a thematic break in an HTML page --> <a href="https://www.evalacademy.com/" target="_blank"> <img alt="Logo" src="../img/Eval_Academy_logo.png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://www.threehive.ca/our-team" target="_blank"> <img alt=" Three Hive Consulting Logo" src="../img/Three Hive .png" height="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp </a> <a href="https://twitter.com/EvalAcademy" target="_blank" class="fa fa-twitter">&nbsp</a> <a href="https://www.linkedin.com/company/evalacademy" target="_blank" class="fa fa-linkedin">&nbsp</a> <a href="https://www.facebook.com/EvaluationAcademy" target="_blank" class="fa fa-facebook">&nbsp</a> <a href="https://www.evalacademy.com/faqs" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbspFAQs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp</a> <a href="https://www.evalacademy.com/contact" target="_blank">Contact Us</a> </div></body></html>';
    res.send(htmlLogin);
    //res.redirect('/index.html');
  });

  return app;
};


//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});
