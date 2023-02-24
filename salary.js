let allEmployees = [];  //global variable to hold entire array of employee info

$(document).ready(readyNow);

function readyNow() {
    //console.log("DOM loaded");
    //add listener for submit button
    $('#submitEmployee').on('click', addEmployee);
}

function addEmployee() {
    console.log('in addEmployee()');
    //grab values from all input fields and assign variables to hold contents
    const firstNameInput = $('#firstName').val();
    const lastNameInput = $('#lastName').val();
    const idInput = $('#idNumber').val();
    const titleInput = $('#jobTitle').val();
    const salaryInput = $('#annualSalary').val();

    //create new variable to create an object using input data
    let newEmployee = {
        fName: firstNameInput,
        lName: lastNameInput,
        ID: idInput,
        title: titleInput,
        salary: salaryInput
    }
    //add new employee to array holding all employees
    allEmployees.push(newEmployee);
    render();
}

function render() {
    //update the DOM and clear current table
    $('#tableOfEmployees').empty();
    //clear input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
    
    //add table headers back in
    $('#tableOfEmployees').append(`
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>ID</th>
        <th>Title</th>
        <th>Salary</th>
        <th></th>
    </tr>
    `);

    //update DOM with all employees
    for (let employee of allEmployees) {
        //console.log('employee info', employee);
        $('#tableOfEmployees').append(`
        <tr>
            <td>${employee.fName}</td>
            <td>${employee.lName}</td>
            <td>${employee.ID}</td>
            <td>${employee.title}</td>
            <td>${employee.salary}</td>
            <td><button class='deleteBtn'>Delete</button></td>
        </tr>
        `);
    }
}   