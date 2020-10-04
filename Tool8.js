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
    let projectName = 'projectU1';

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/html/Tool8.html'));
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

            console.log("--------------");
            console.log(ethicalRiskHTML);
            console.log(strategyHTML);
            console.log("--------------");

            //clear previous date in table for this user and this project     
            let sqlQuery = "DELETE FROM Tool8Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
            sqlRequest.query(sqlQuery, function (err, data) {
                if (err) console.log(err)
                //console.log(data);
                sql.close();
            });

            // if table is multiple row
            if (typeof ethicalRiskHTML == 'object') {

                var i = 0;
                ethicalRiskHTML.forEach(element => {
                    let sqlQuery2 = "INSERT INTO Tool8Table (UserName, ProjectName, EthicalRisk, MitStrategy) VALUES ('" + userSession + "', '" + projectName + "', '" + ethicalRiskHTML[i] + "','" + strategyHTML[i] + " ');";
                    sqlRequest.query(sqlQuery2, function (err, data) {
                        if (err) console.log(err)
                        sql.close();
                    });
                    i++;
                });
            }

            // if table is only one row
            else {
                let sqlQuery3 = "INSERT INTO Tool8Table (UserName, ProjectName, EthicalRisk, MitStrategy) VALUES ('" + userSession + "', '" + projectName + "', '" + ethicalRiskHTML + "','" + strategyHTML + " ');";
                sqlRequest.query(sqlQuery3, function (err, data) {
                    if (err) console.log(err)
                    sql.close();
                });
            }

        });
    });

    return app;
};

//var server = app.listen(5000, function () {
//  console.log('Server is running..');
//});
