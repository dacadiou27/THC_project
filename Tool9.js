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
        res.sendFile(path.join(__dirname + '/public/html/Tool9.html'));
    });


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

            console.log("--------------");
            console.log(productHTML);
            console.log(descriptionHTML);
            console.log(audienceHTML);
            console.log(responsibilityHTML);
            console.log(draftDueHTML);
            console.log(finalDueHTML);
            console.log("--------------");

            console.log("--------------");
            console.log(product1HTML);
            console.log(description1HTML);
            console.log(audience1HTML);
            console.log(methodHTML);
            console.log(responsibility1HTML);
            console.log(date1HTML);
            console.log("--------------");

            //First table on Tool 9
            //clear previous date in table for this user and this project     
            let sqlQuery = "DELETE FROM Tool9Table1 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
            sqlRequest.query(sqlQuery, function (err, data) {
                if (err) console.log(err)
                //console.log(data);
                sql.close();
            });

            // if table is multiple row
            if (typeof productHTML == 'object') {

                var i = 0;
                productHTML.forEach(element => {
                    let sqlQuery2 = "INSERT INTO Tool9Table1 (UserName, ProjectName, ProductT9, DescriptionT9, AudienceT9, ResponsiblityT9, DraftDueT9, FinalDueT9) VALUES ('" + userSession + "', '" + projectName + "', '" + productHTML[i] + "','" + descriptionHTML[i] + "','" + audienceHTML[i] +  "','" + responsibilityHTML[i] +  "','" + draftDueHTML[i] +  "','" + finalDueHTML[i] + " ');";
                    sqlRequest.query(sqlQuery2, function (err, data) {
                        if (err) console.log(err)
                        sql.close();
                    });
                    i++;
                });
            }

            // if table is only one row
            else {
                let sqlQuery3 = "INSERT INTO Tool9Table1 (UserName, ProjectName, ProductT9, DescriptionT9, AudienceT9, ResponsiblityT9, DraftDueT9, FinalDueT9) VALUES ('" + userSession + "', '" + projectName + "', '" + productHTML + "', '" + descriptionHTML + "', '" + audienceHTML  + "', '" + responsibilityHTML  + "', '" + draftDueHTML  + "', '" + finalDueHTML + " ');";
                sqlRequest.query(sqlQuery3, function (err, data) {
                    if (err) console.log(err)
                    sql.close();
                });
            }

            //Second table on Tool 9
            //clear previous date in table for this user and this project     
            let sqlQuery4 = "DELETE FROM Tool9Table2 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
            sqlRequest.query(sqlQuery4, function (err, data) {
                if (err) console.log(err)
                //console.log(data);
                sql.close();
            });

            // if table is multiple row
            if (typeof product1HTML == 'object') {

                var i = 0;
                product1HTML.forEach(element => {
                    let sqlQuery5 = "INSERT INTO Tool9Table2 (UserName, ProjectName, Product2, Description2, Audience2, Method2, Responsibility2, Date2) VALUES ('" + userSession + "', '" + projectName + "', '" + product1HTML[i] + "','" + description1HTML[i] + "','" + audience1HTML[i] +  "','" + methodHTML[i] +  "','" + responsibility1HTML[i] +  "','" + date1HTML[i] + " ');";
                    sqlRequest.query(sqlQuery5, function (err, data) {
                        if (err) console.log(err)
                        sql.close();
                    });
                    i++;
                });
            }

            // if table is only one row
            else {
                let sqlQuery6 = "INSERT INTO Tool9Table2 (UserName, ProjectName, Product2, Description2, Audience2, Method2, Responsibility2, Date2) VALUES ('" + userSession + "', '" + projectName + "', '" + product1HTML + "','" + description1HTML + "','" + audience1HTML +  "','" + methodHTML +  "','" + responsibility1HTML +  "','" + date1HTML + " ');";
                sqlRequest.query(sqlQuery6, function (err, data) {
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
