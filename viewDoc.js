const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const config = require('./config.js');

const app = express();

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);


app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());//The request data and their response data will be formated in JSON form

//let userSession = 'user1';
//let projectName = 'projectU1';

module.exports = function () {

  app.get('/viewDocument', function (req, res) {

    let backgroundEJS = "";
    let EvalHistoryEJS = "";
    let PurposeUseEJS = "";
    let EvalScopeEJS = "";
    let DataPlanSummaryEJS = "";

    let tool2tableEJS = "";
    let tool4tableEJS = "";

    let LogicModEJS = "";
    let SituationEJS = "";
    let GoalEJS = "";
    let AssumptionsEJS = "";
    let FactorsEJS = "";

    let Q1SQLEJS = "";
    let Q2SQLEJS = "";
    let Q3SQLEJS = "";
    let Q4SQLEJS = "";
    let Q5SQLEJS = "";
    let Q6SQLEJS = "";
    let Q7SQLEJS = "";
    let QHTMLEJS = "";

    let R1SQLEJS = "";
    let R2SQLEJS = "";
    let R3SQLEJS = "";
    let R4SQLEJS = "";
    let R5SQLEJS = "";
    let R6SQLEJS = "";
    let R7SQLEJS = "";


    let tool8tableEJS = "";
    let tool9table1EJS = "";
    let tool9table2EJS = "";
    let tool7table1EJS = "";
    let tool7table2EJS = "";
    let tool7table3EJS = "";


    // connect to your database
    sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var sqlRequest = new sql.Request();

      let sqlQuery1 = "SELECT * FROM Tool2Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
      sqlRequest.query(sqlQuery1, function (err, data) {
        //console.log(sqlQuery1);
        if (err) console.log(err)
        //console.log(data);

        var i = 0;
        data.recordset.forEach(element => {
          tool2tableEJS += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='inputs' value='" + data.recordset[i].Inputs + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='activities' value='" + data.recordset[i].Activities + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='ouputs' value='" + data.recordset[i].Outputs + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='shortTerm' value='" + data.recordset[i].ShortTerm + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='midTerm' value='" + data.recordset[i].MidTerm + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='longTerm' value='" + data.recordset[i].LongTerm + "'></tr>";
          i++;
        });
        //console.log(table);
        sql.close();
      });


      let sqlQuery2 = "SELECT * FROM dbo.Tool2 WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
      //console.log(sqlQuery);

      sqlRequest.query(sqlQuery2, function (err, data) {
        if (err) console.log(err);
        console.log(data);
        LogicModEJS = data.recordset[0].LogicMod;
        SituationEJS = data.recordset[0].Situation;
        GoalEJS = data.recordset[0].Goal;
        AssumptionsEJS = data.recordset[0].Assumptions;
        FactorsEJS = data.recordset[0].Factors;
        console.log(LogicModEJS);
        // res.render(path.join(__dirname + '/public/html/viewDocument.html'), { bgrd: backgroundEJS, eval: EvalHistoryEJS, tool2table: tool2tableEJS, purposeUse: PurposeUseEJS, EvalScope: EvalScopeEJS, DataPlan: DataPlanSummaryEJS });
        //res.end();
        sql.close();
      });

      let sqlQuery3 = "SELECT * FROM Tool4Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

      sqlRequest.query(sqlQuery3, function (err, data) {
        //console.log(sqlQuery);
        if (err) console.log(err)
        console.log(data);
        let table = "";
        var i = 0;
        data.recordset.forEach(element => {
          tool4tableEJS += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='stakeholderTypes' value='" + data.recordset[i].stakeholderTypes + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='stakeholderNames' value='" + data.recordset[i].stakeholderNames + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='stakeholderPurp' value=' " + data.recordset[i].stakeholderPurp + "' ></td><td><input style='text-align: left;' type='text' class='form-control'  name='stakeholderNat' value='" + data.recordset[i].stakeholderNat + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='primIntUser' value='" + data.recordset[i].primIntUser + "'></td></tr>";
          i++;
        });
        //console.log(table);
        sql.close();
      });

      /*
            let sqlQuery4 = "SELECT * FROM Tool6Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
      
            sqlRequest.query(sqlQuery4, function (err, data) {
            //console.log(sqlQuery);
            if (err) console.log(err)
            console.log(data);
      
            Q1SQLEJS = data.recordset[0].EvalQ;
            Q2SQLEJS = data.recordset[1].EvalQ;
            Q3SQLEJS = data.recordset[2].EvalQ;
            Q4SQLEJS = data.recordset[3].EvalQ;
            Q5SQLEJS = data.recordset[4].EvalQ;
            Q6SQLEJS = data.recordset[5].EvalQ;
            Q7SQLEJS = data.recordset[6].EvalQ;
            console.log(Q1SQLEJS);
            // QHTMLEJS = "<table><tr><td> 1 " + Q1SQLEJS + "</td></tr><tr><td> 2 " + Q2SQLEJS + "</td></tr><tr><td> 3 " + Q3SQLEJS + "</td></tr><tr><td> 4 " + Q4SQLEJS + "</td></tr><tr><td> 5 " + Q5SQLEJS + "</td></tr><tr><td> 6 " + Q6SQLEJS + "</td></tr><tr><td> 7 " + Q7SQLEJS + "</td></tr></table>";
      
            sql.close();
          });
          */
      let sqlQuery4 = "SELECT * FROM Tool6Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

      sqlRequest.query(sqlQuery4, function (err, data) {
        //console.log(sqlQuery);
        if (err) console.log(err)
        //console.log(data);

        Q1SQLEJS = data.recordset[0].EvalQ;
        Q2SQLEJS = data.recordset[1].EvalQ;
        Q3SQLEJS = data.recordset[2].EvalQ;
        Q4SQLEJS = data.recordset[3].EvalQ;
        Q5SQLEJS = data.recordset[4].EvalQ;
        Q6SQLEJS = data.recordset[5].EvalQ;
        Q7SQLEJS = data.recordset[6].EvalQ;
        R1SQLEJS = data.recordset[0].Reason;
        R2SQLEJS = data.recordset[1].Reason;
        R3SQLEJS = data.recordset[2].Reason;
        R4SQLEJS = data.recordset[3].Reason;
        R5SQLEJS = data.recordset[4].Reason;
        R6SQLEJS = data.recordset[5].Reason;
        R7SQLEJS = data.recordset[6].Reason;
        console.log(Q1SQLEJS);
        // res.render(path.join(__dirname + '/public/html/viewDocument.html'), { bgrd: backgroundEJS, eval: EvalHistoryEJS, tool2table: tool2tableEJS, purposeUse: PurposeUseEJS, EvalScope: EvalScopeEJS, DataPlan: DataPlanSummaryEJS });
        //res.end();
        sql.close();
      });



      let sqlQuery5 = "SELECT * FROM Tool8Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

      sqlRequest.query(sqlQuery5, function (err, data) {
        //console.log(sqlQuery);
        if (err) console.log(err)
        console.log(data);


        let table = "";
        var i = 0;
        data.recordset.forEach(element => {
          tool8tableEJS += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='ethicalRisk' value='" + data.recordset[i].EthicalRisk + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='strategy2' value='" + data.recordset[i].MitStrategy + "'></td></tr>";
          i++;
          //console.log(table);
          sql.close();
        });
      });

      let sqlQuery6 = "SELECT * FROM Tool9Table1 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";


      sqlRequest.query(sqlQuery6, function (err, data) {
        //console.log(sqlQuery);
        if (err) console.log(err)
        // console.log(data);


        //let table1 = "";
        var i = 0;
        data.recordset.forEach(element => {
          tool9table1EJS += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='product' value='" + data.recordset[i].ProductT9 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='description' value='" + data.recordset[i].DescriptionT9 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='audience' value='" + data.recordset[i].AudienceT9 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='responsibility' value='" + data.recordset[i].ResponsiblityT9 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='draftDue' value='" + data.recordset[i].DraftDueT9 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='finalDue' value='" + data.recordset[i].FinalDueT9 + "'></td></tr>";
          i++;
          //console.log(table);
          sql.close();
        });
      });

      let sqlQuery7 = "SELECT * FROM Tool9Table2 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

      sqlRequest.query(sqlQuery7, function (err, data) {
        //console.log(sqlQuery);
        if (err) console.log(err)
        //console.log(data);


        var i = 0;
        data.recordset.forEach(element => {
          tool9table2EJS += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='product1' value='" + data.recordset[i].Product2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='description1' value='" + data.recordset[i].Description2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='audience1' value='" + data.recordset[i].Audience2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='method' value='" + data.recordset[i].Method2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='responsibility1' value='" + data.recordset[i].Responsibility2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='date1' value='" + data.recordset[i].Date2 + "'></td></tr>";
          i++;
          //console.log(table2);
          sql.close();
        });
      });

      let sqlQuery8 = "SELECT * FROM Tool7Table WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
      sqlRequest.query(sqlQuery8, function (err, data) {
        //console.log(sqlQuery);
        if (err) console.log(err)
        //console.log(data);

        var i = 0;
        data.recordset.forEach(element => {
          tool7table1EJS += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='QR' value='" + data.recordset[i].Subquestion + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='Indicator' value='" + data.recordset[i].Indicator + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='Method' value='" + data.recordset[i].Method + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='Start' value='" + data.recordset[i].StartDate + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='End' value='" + data.recordset[i].EndDate + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='Resp' value='" + data.recordset[i].Responsible + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='Notes' value='" + data.recordset[i].Notes + "'></td></tr>";
          i++;
        });
        sql.close();
      });

      let sqlQuery9 = "SELECT * FROM Tool7Table2 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";

      sqlRequest.query(sqlQuery9, function (err, data) {
        //console.log(sqlQuery2);
        if (err) console.log(err)
        //console.log(data);

        //let table2 = "";
        var i = 0;
        data.recordset.forEach(element => {
          tool7table2EJS += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='Num' value='" + data.recordset[i].Subquestion + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S1' value='" + data.recordset[i].Source1 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S2' value='" + data.recordset[i].Source2 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S3' value='" + data.recordset[i].Source3 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S4' value='" + data.recordset[i].Source4 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S5' value='" + data.recordset[i].Source5 + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='S6' value='" + data.recordset[i].Source6 + "'></td></tr>";
          i++;
        });
        sql.close();
      });

      let sqlQuery10 = "SELECT * FROM Tool7Table3 WHERE userName = '" + userSession + "' AND ProjectName = '" + projectName + " ' ;";
      sqlRequest.query(sqlQuery10, function (err, data) {
        //console.log(sqlQuery3);
        if (err) console.log(err)
        //console.log(data);


        var i = 0;
        data.recordset.forEach(element => {
          tool7table3EJS += "<tr><td><input style='text-align: left;' type='text' class='form-control'  name='Meth' value='" + data.recordset[i].Method + "'></td><td><input style='text-align: left;' type='text' class='form-control'  name='details' value='" + data.recordset[i].Details + "'></td></tr>";
          i++;
        });
        sql.close();
      });

      //////////
      let sqlQuery = "SELECT * FROM dbo.Projects WHERE UserName = '" + userSession + "' AND ProjectName ='" + projectName + "';";
      //  console.log(sqlQuery);

      sqlRequest.query(sqlQuery, function (err, data) {
        if (err) console.log(err);
        console.log(data);
        backgroundEJS = data.recordset[0].Background;
        EvalHistoryEJS = data.recordset[0].EvalHistory;
        PurposeUseEJS = data.recordset[0].PurposeUse;
        EvalScopeEJS = data.recordset[0].EvalScope;
        DataPlanSummaryEJS = data.recordset[0].DataPlanSummary;
        //console.log(backgroundEJS);
        res.render(path.join(__dirname + '/public/html/viewDocument.html'), { bgrd: backgroundEJS, eval: EvalHistoryEJS, tool2table: tool2tableEJS, purposeUse: PurposeUseEJS, EvalScope: EvalScopeEJS, DataPlan: DataPlanSummaryEJS, logicMod: LogicModEJS, situation: SituationEJS, goal: GoalEJS, assumptions: AssumptionsEJS, factors: FactorsEJS, tool4table: tool4tableEJS, tool8table: tool8tableEJS, tool9table1: tool9table1EJS, tool9table2: tool9table2EJS, tool7table1: tool7table1EJS, tool7table2: tool7table2EJS, tool7table3: tool7table3EJS, q1: Q1SQLEJS, r1: R1SQLEJS, q2: Q2SQLEJS, r2: R2SQLEJS, q3: Q3SQLEJS, r3: R3SQLEJS, q4: Q4SQLEJS, r4: R4SQLEJS, q5: Q5SQLEJS, r5: R5SQLEJS, q6: Q6SQLEJS, r6: R6SQLEJS, q7: Q7SQLEJS, r7: R7SQLEJS });
        //res.end();
        sql.close();
      });
      //////////
    });
  });


  return app;
};

//  var server = app.listen(5000, function () {
//    console.log('Server is running..');
//  });
