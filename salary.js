let allEmployees = [];  //global variable to hold entire array of employee info

$(document).ready(readyNow);

function readyNow(){
    //console.log("DOM loaded");
    //add listener for submit button
    $('#submitEmployee').on('click', addEmployee);
}

function addEmployee() {
    console.log('in addEmployee()');
}