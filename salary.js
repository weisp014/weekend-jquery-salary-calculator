let allEmployees = [];  //global variable to hold entire array of employee info
let monthlyCost = 0;

$(document).ready(readyNow);

function readyNow() {
    //console.log("DOM loaded");
    //add listener for submit button
    $('#submitEmployee').on('click', addEmployee);
    //add listener for delete button
    $('#tableOfEmployees').on('click', '.deleteBtn', removeEmployee);
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
    calculateMonthlyCost();
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

    //update DOM with new total monthly cost
    $('#totalCost').html(`$${Math.round(monthlyCost)}`);

    //Render red background if cost greater than $20,000
    if (monthlyCost > 20000) {
        $('#totalCost').addClass('lot-of-money');
    }
    else {
        $('#totalCost').removeClass('lot-of-money');
    }
}

//calculate monthly cost for all employees
function calculateMonthlyCost() {
    //console.log('in monthlyBudget()');
    //reset budget
    monthlyCost = 0;
    //loop through all employees and add up their salaries
    for (let cost of allEmployees) {
        monthlyCost += Number(cost.salary);
    }
    monthlyCost = monthlyCost / 12; //change yearly budget to monthly
    //console.log('monthly budget:', monthlyCost);
    if (monthlyCost > 20000) {

    }
}

//TO-DO:remove employee info in row that delete button was pressed
function removeEmployee() {
    //console.log('in removeEmployee');

    //new array to replace allEmployees
    let updatedEmployees = [];
    //save first name text from employee being deleted
    let employeeToRemove = $(this).parent().siblings().first().text();
    //check for employees matching that first name and add them to new array if they don't match
    for (let employee of allEmployees) {
        if (employee.fName !== employeeToRemove) {
            updatedEmployees.push(employee);
        }
    }
    allEmployees = updatedEmployees;
    //update montly cost after employee removed
    calculateMonthlyCost();
    render();
}