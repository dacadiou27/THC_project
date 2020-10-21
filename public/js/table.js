//Tools Page

/*
function AddEmail() {
    var First = document.getElementById('FName').value;
    var Last = document.getElementById('LName').value;
    var Email = document.getElementById('Email').value;
    let User = First + " " + Last + " " + Email;
    let userList = [];
    userList.push(User);
    //console.log(userList);
    userList.forEach(function (element) {
        var list = document.createElement('div');
        list.setAttribute('contentEditable', true);
        GetMembers.appendChild(list);
        list.innerHTML += element;

    })
    document.getElementById("FName").value = "";
    document.getElementById("LName").value = "";
    document.getElementById("Email").value = "";

}
*/

//tool2 functions

function addRow10() {
    var table = document.getElementById("TheoryTable");
    //var row = table.insertRow(2);
    var row = table.insertRow(TheoryTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='inputs' value='" + document.getElementById('inputs').value + "'>";
    cell2.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='activities' value='" + document.getElementById("activities").value + "'>";
    cell3.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='ouputs' value='" + document.getElementById("ouputs").value + "'>";
    cell4.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='shortTerm' value='" + document.getElementById("shortTerm").value + "'>";
    cell5.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='midTerm' value='" + document.getElementById("midTerm").value + "'>";
    cell6.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='longTerm' value='" + document.getElementById("longTerm").value + "'>";
    cell7.innerHTML = "<input type='button' value='-' class='btn' onclick='deleteRow(this)'/>";

    // Erase & Reset to placeholder the entered value
    document.getElementById("inputs").value = "";
    document.getElementById("activities").value = "";
    document.getElementById("ouputs").value = "";
    document.getElementById("shortTerm").value = "";
    document.getElementById("midTerm").value = "";
    document.getElementById("longTerm").value = "";
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//Tool 4 functions

function showChoicesPurpose(){    
    var selPurpose = document.getElementById("selPurpose");    
    
    var resultPurpose = "";
    resultPurpose += "";    
    for (i = 0; i < selPurpose.length; i++){     
     currentOption = selPurpose[i];     
     if (currentOption.selected == true){
        resultPurpose += "" + currentOption.value + ", ";
     } 
    }    
    resultPurpose += "";    
    output = document.getElementById("output");    
    output.innerHTML = resultPurpose;   
    } 

    function showChoicesNature(){    
    var selNature = document.getElementById("selNature");    
    var resultNature = "";
    resultNature += "";    
    for (i = 0; i < selNature.length; i++){     
     currentOption = selNature[i];     
     if (currentOption.selected == true){
        resultNature += "" + currentOption.value + ", ";
     } 
    }    
    resultNature += "";
    output2 = document.getElementById("output2");
    output2.innerHTML = resultNature;            
    } 

function addRow() {
        var table = document.getElementById("stakeholderTable");
        var row = table.insertRow(stakeholderTable.rows.length - 1);

        var cell1 = row.insertCell(0);                    
        var cell2 = row.insertCell(1);                    
        var cell3 = row.insertCell(2);                   
        var cell4 = row.insertCell(3);                    
        var cell5 = row.insertCell(4);                    
        var cell6 = row.insertCell(5);          
    
        cell1.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='stakeholderTypes' value='" + document.getElementById("stakeholderTypes").value + "'>";
        cell2.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='stakeholderNames' value='" + document.getElementById("stakeholderNames").value + "'>";                            
        cell3.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='stakeholderPurp' value='" + document.getElementById("output").value + "'>";
        cell4.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='stakeholderNat' value='" + document.getElementById("output2").value + "'>";        
        cell5.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='primIntUser' value='" + document.getElementById("PrimIntUser").value + "'>";
        cell6.innerHTML = "<input type='button' value='-' class='btn' onclick='deleteRow(this)'/>";
    
        document.getElementById("stakeholderTypes").value = "";
        document.getElementById("stakeholderNames").value = "";
        document.getElementById("Purpose").value = "";
        document.getElementById("natureOfInvolvement").value = "";
        document.getElementById("PrimIntUser").value = "";
        document.getElementById("output").value = "";
        document.getElementById("output2").value = "";
        }

//Tool 6 NO JS

//Tool 7
//save Data Collection Plan
function saveQuestion() {
    // Erase & Reset to placeholder the entered value
    document.getElementById("Background").value = "";
}

//SubQuestions add Rows
//add a new row at the bottom of table
function addSubquestion() {
    var table = document.getElementById("subquestions");
    var row = table.insertRow(subquestions.rows.length - 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    /*cell1.innerHTML = document.getElementById("QR").value;
    cell2.innerHTML = document.getElementById("Indicator").value;
    cell3.innerHTML = document.getElementById("Method").value;
    cell4.innerHTML = document.getElementById("Start").value;
    cell5.innerHTML = document.getElementById("End").value;
    cell6.innerHTML = document.getElementById("Resp").value;
    cell7.innerHTML = document.getElementById("Notes").value;*/

    cell1.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='QR' value='" + document.getElementById('QR').value + "'>";
    cell2.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='Indicator' value='" + document.getElementById('Indicator').value + "'>";
    cell3.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='Method' value='" + document.getElementById('Method').value + "'>";
    cell4.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='Start' value='" + document.getElementById('Start').value + "'>";
    cell5.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='End' value='" + document.getElementById('End').value + "'>";
    cell6.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='Resp' value='" + document.getElementById('Resp').value + "'>";
    cell7.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='Notes' value='" + document.getElementById('Notes').value + "'>";
    cell8.innerHTML = "<input type='button' value='-' class='btn' onclick='deleteRow(this)'/>";

    // Erase & Reset to placeholder the entered value
    document.getElementById("QR").value = "";
    document.getElementById("Indicator").value = "";
    document.getElementById("Method").value = "";
    document.getElementById("Start").value = "";
    document.getElementById("End").value = "";
    document.getElementById("Resp").value = "";
    document.getElementById("Notes").value = "";
    //document.getElementById("myForm").reset();
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//add row to Data Souces table
function addSources() {
    var table = document.getElementById("dataCollTable");
    var row = table.insertRow(subquestions.rows.length - 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='Num' value='" + document.getElementById('Num').value + "'>";
    cell2.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='S1' value='" + document.getElementById('S1').value + "'>";
    cell3.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='S2' value='" + document.getElementById('S2').value + "'>";
    cell4.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='S3' value='" + document.getElementById('S3').value + "'>";
    cell5.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='S4' value='" + document.getElementById('S4').value + "'>";
    cell6.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='S5' value='" + document.getElementById('S5').value + "'>";
    cell7.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='S6' value='" + document.getElementById('S6').value + "'>";
    cell8.innerHTML = "<input type='button' value='-' class='btn' onclick='deleteRow(this)'/>";


    // Erase & Reset to placeholder the entered value
    document.getElementById("Num").value = "";
    document.getElementById("S1").value = "";
    document.getElementById("S2").value = "";
    document.getElementById("S3").value = "";
    document.getElementById("S4").value = "";
    document.getElementById("S5").value = "";
    document.getElementById("S6").value = "";
}
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


function addMethod() {
    var table = document.getElementById("dataMethTable");
    var row = table.insertRow(subquestions.rows.length - 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='Meth' value='" + document.getElementById('Meth').value + "'>";
    cell2.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='details' value='" + document.getElementById('details').value + "'>";
    cell3.innerHTML = "<input type='button' value='-' class='btn' onclick='deleteRow(this)'/>";

    // Erase & Reset to placeholder the entered value
    document.getElementById("Meth").value = "";
    document.getElementById("details").value = "";

}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}






















//Tool 8 Functions 
function addRow5() {
    var table = document.getElementById("ethicsTable");
    var row = table.insertRow(ethicsTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    //cell1.setAttribute('contentEditable', 'true');
    var cell2 = row.insertCell(1);
    //cell2.setAttribute('contentEditable', 'true');
    var cell3 = row.insertCell(2);

    //cell1.innerHTML = document.getElementById("ethicalRisk").value;
    //cell2.innerHTML = document.getElementById("strategy").value;

    cell1.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='ethicalRisk' value='" + document.getElementById('ethicalRisk').value + "'>";
    cell2.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='strategy2' value='" + document.getElementById("strategy").value + "'>";
    cell3.innerHTML = "<input type='button' value='-' class='btn' onclick='deleteRow(this)'/>";

    // Erase & Reset to placeholder the entered value
    document.getElementById("strategy").value = "";
    document.getElementById("ethicalRisk").value = "";
    //document.getElementById("myForm").reset();

}
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}




//Tool 9 functions  table 1
function addRow3() {
    var table = document.getElementById("reportingTable");
    var row = table.insertRow(reportingTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    //cell1.setAttribute('contentEditable', 'true');
    var cell2 = row.insertCell(1);
    //cell2.setAttribute('contentEditable', 'true');
    var cell3 = row.insertCell(2);
    //cell3.setAttribute('contentEditable', 'true');
    var cell4 = row.insertCell(3);
    //cell4.setAttribute('contentEditable', 'true');
    var cell5 = row.insertCell(4);
    //cell5.setAttribute('contentEditable', 'true');
    var cell6 = row.insertCell(5);
    //cell6.setAttribute('contentEditable', 'true');
    var cell7 = row.insertCell(6);

    //cell1.innerHTML = document.getElementById("product").value;
    //cell2.innerHTML = document.getElementById("description").value;
    //cell3.innerHTML = document.getElementById("audience").value;
    //cell4.innerHTML = document.getElementById("responsibility").value;
    //cell5.innerHTML = document.getElementById("draftDue").value;
    //cell6.innerHTML = document.getElementById("finalDue").value;

    cell1.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='product' value='" + document.getElementById('product').value + "'>";
    cell2.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='description' value='" + document.getElementById('description').value + "'>";
    cell3.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='audience' value='" + document.getElementById('audience').value + "'>";
    cell4.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='responsibility' value='" + document.getElementById('responsibility').value + "'>";
    cell5.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='draftDue' value='" + document.getElementById('draftDue').value + "'>";
    cell6.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='finalDue' value='" + document.getElementById('finalDue').value + "'>";
    cell7.innerHTML = "<input type='button' value='-' class='btn' onclick='deleteRow(this)'/>";

    // Erase & Reset to placeholder the entered value
    document.getElementById("product").value = "";
    document.getElementById("description").value = "";
    document.getElementById("audience").value = "";
    document.getElementById("responsibility").value = "";
    document.getElementById("draftDue").value = "";
    document.getElementById("finalDue").value = "";
    document.getElementById("myForm").reset();
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//Tool 9 functions  table 2
function addRow4() {
    var table = document.getElementById("communicationTable");
    var row = table.insertRow(communicationTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    //cell1.setAttribute('contentEditable', 'true');
    var cell2 = row.insertCell(1);
    //cell2.setAttribute('contentEditable', 'true');
    var cell3 = row.insertCell(2);
    //cell3.setAttribute('contentEditable', 'true');
    var cell4 = row.insertCell(3);
    //cell4.setAttribute('contentEditable', 'true');
    var cell5 = row.insertCell(4);
    //cell5.setAttribute('contentEditable', 'true');
    var cell6 = row.insertCell(5);
    //cell6.setAttribute('contentEditable', 'true');
    var cell7 = row.insertCell(6);

    //cell1.innerHTML = document.getElementById("product1").value;
    //cell2.innerHTML = document.getElementById("description1").value;
    //cell3.innerHTML = document.getElementById("audience1").value;
    //cell4.innerHTML = document.getElementById("method").value;
    //cell5.innerHTML = document.getElementById("responsibility1").value;
    //cell6.innerHTML = document.getElementById("date1").value;

    cell1.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='product1' value='" + document.getElementById('product1').value + "'>";
    cell2.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='description1' value='" + document.getElementById('description1').value + "'>";
    cell3.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='audience1' value='" + document.getElementById('audience1').value + "'>";
    cell4.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='method' value='" + document.getElementById('method').value + "'>";
    cell5.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='responsibility1' value='" + document.getElementById('responsibility1').value + "'>";
    cell6.innerHTML = "<input style='text-align: left;' type='text' class='form-control'  name='date1' value='" + document.getElementById('date1').value + "'>";
    cell7.innerHTML = "<input type='button' value='-' class='btn' onclick='deleteRow(this)'/>";

    // Erase & Reset to placeholder the entered value   
    document.getElementById("product1").value = "";
    document.getElementById("description1").value = "";
    document.getElementById("audience1").value = "";
    document.getElementById("method").value = "";
    document.getElementById("responsibility1").value = "";
    document.getElementById("date1").value = "";
    //document.getElementById("myForm").reset();

}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

