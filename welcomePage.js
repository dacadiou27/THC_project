const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());//The request data and ther response data will be formated in JSON form

//var userSession = 'user1';

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function () {

app.get('/', function (req, res) {

  console.log("Welcome " + userSession + " ! from get get welcomePage!")
  
  res.sendFile(path.join(__dirname + '/public/html/WelcomePage.html'));

  console.log('--------------------------');
  console.log(req.query.userNameSession);
  console.log('--------------------------');
  req.query.userNameSession = userSession;
  console.log('--------------------------');
  console.log(req.query.userNameSession);
  console.log('--------------------------');
  //res.sendFile(req.query.userNameSession);
  //res.locals(req.query.userNameSession);

  //res.writeHead(200,{"Content-Type" : "text/html"});// you can add many header information, request
  //res.write(req.query.userNameSession);
  
  //req.query.userNameSession.innerHTML=userSession;
 // res.append(req.query.userNameSession);

  // connect to your database
  sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var sqlRequest = new sql.Request();

    let username = userSession;

    let sqlQuery = "SELECT ProjectName FROM dbo.Projects WHERE UserName = '" + username + "';";
    console.log(sqlQuery);

    sqlRequest.query(sqlQuery, function (err, data) {
      if (err) console.log(err)
      console.log(data);
      console.log(data.recordset);

      //var ul = document.getElementById("projectsList");
      var ul = req.query.projectsList;
      //var li = document.createElement("li");
      var li = req.query.li;

      data.recordset.forEach(element => {
        console.log(element.ProjectName);
        //li.appendChild(document.createTextNode(element.ProjectName));
        //ul.appendChild(li);
      })

      /*
      function addToList() {
        var ul = document.getElementById("projectsList");
        var li = document.createElement("li");
        data.recordset.forEach(element => {
          li.appendChild(document.createTextNode(ProjectName.element));
        });
        ul.appendChild(li);
      }*/

      //if (data.recordset) { res.redirect('/html/ToolsPage.html') }
      //else {
      //  res.send('Something went wrong!');
      //} res.end();

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

//node index.js