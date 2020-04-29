var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "employeeTrackerDB"
});

function employeeSearch() {
    inquirer.prompt([
    {
        name: "employeeFirst",
        message: "Please enter the first name of employee:",
        type: "input"
    },
    {
        name: "employeeLast",
        message: "Please enter the last name of employee:",
        type: "input"
    },
    ]).then(function (){
        console.log();
        menu();
    });
    
}


function employeeDepartmentSearch() {
    inquirer.prompt({
        name: "employeeDepart",
        message: "Please enter the employee department you would like to view:",
        type: "Input"
    })

}

function employeeManagerSearch() {
    inquirer.prompt({
        name: "employeeManager",
        message: "Please enter the manager of employee here:",
        type: "Input"
    })

}

function addEmployee() {
    inquirer.prompt([
        {
        name: "addEmployee",
        message: "Please enter the first name of employee to begin adding:",
        type: "Input"
        },
        {
        name: "addEmployeeLast",
        message: "Please enter the last name of employee:",
        type: "input"
        }
    ])
}

function removeEmployee() {
    inquirer.prompt([
        {
        name: "removeEmployee",
        message: "Please enter the name of the employee you would like to remove:",
        type: "Input"
        },
        {
        name: "confirmRemove",
        message: "Are you sure you want to remove this employee?",
        type: "confirm"

        },
    ])
}


function updateEmployeeRole() {
    inquirer.prompt({
        name: "updateRole",
        message: "Please enter the name of the employee for updating:",
        type: "Input"
    })
}

function updateEmployeeManager() {
    inquirer.prompt({
        name: "updateManager",
        message: "Please enter the name of the employee to update manager:",
        type: "Input"
    })
}

function updateEmployeeDepartment() {
    inquirer.prompt({
        name: "updateDepartment",
        message: "Please enter the name of the employee to update department:",
        type: "Input"
    })
}

function menu() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        pageSize: 12,
        choices: [
            "Search All Employees by name",
            "View All Employees by Department",
            "View All Employees by Manager",
            "Add Employees",
            "Remove Employees",
            "Updates Employee Role",
            "Update Employee Manager",
            "Update Employee Department",
            "Exit"
        ]
    }).then(({action}) => {
                switch(action) {
                    case "Search All Employees by name":
                    employeeSearch();
                    break;
          
                case "View All Employees by Department":
                    employeeDepartmentSearch();
                    break;
          
                case "View All Employees by Manager":
                    employeeManagerSearch();
                    break;
          
                case "Add Employees":
                    addEmployee();
                    break;
          
                case "Remove Employees":
                    removeEmployee();
                    break;
                
                case "Updates Employee Role":
                    updateEmployeeRole();
                    break;
        
                case "Updates Employee Manager":
                    updateEmployeeManager();
                    break;
        
                case "Updates Employee Department":
                    updateEmployeeDepartment();
                    break;
        
                case "exit":
                    connection.end();
                    break;
        
                }
            });
        }
connection.connect(function(err) {
    if (err) throw err;
    menu();
});