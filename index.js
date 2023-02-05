const inquirer = require('inquirer')
const express = require("express") 
const fs= require("fs")
const Table = require('console.table');
// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);



function ManageQuestion() {


    inquirer
        .prompt([
            {   name : "Question",
                type : "list",
                message : "What would you like to do?",
                choices : [ 
                            'View All Employees', 
                            'Add Employee',
                            'Update Employee Role', 
                            'View All Roles',
                            'Add Role',
                            'Veiw All Department', 
                            'Add Department',
                            // 'Update Employee manager',
                            // 'View Employees by manager',
                            // 'View Empoyees by department',
                            // 'Delete Department',
                            // 'Delete roles',
                            // 'Delete Employee',
                            'Quit'
                        ]}
        ])
        .then((result) => {
            if( result === 'View All Employees'){
                ViewAllEmployees();
            }
            if( result === 'Add Employee'){
                AddEmployees();
            }
            if( result === 'Update Employee Role'){
                UpdateEmployeeRole();
            }
            if( result === 'View All Roles'){
                ViewAllRoles();
            }
            if( result === 'Add Role'){
                AddRole();
            }
            if( result === 'Veiw All Department'){
                ViewAllDepartment();
            }
            if( result === 'Add Department'){
                AddDepartment();
            }
            // if (result === 'Update Employee manager'){
            //     UpdateEmployeeManager();
            // }
            // if (result === 'View Employees by manager'){
            //     ViewEmployeesByManager();
            // }
            // if (result === 'View Empoyees by department'){
            //     ViewEmpoyeesByDepartment();
            // }
            // if( result === 'Delete Department'){
            //     DeleteDepartment();
            // }
            // if( result === 'Delete roles'){
            //     DeleteRoles();
            // }
            // if( result === 'Delete Employee'){
            //     DeleteEmployee();
            // }
            if( result === 'Quit'){
                Quit();
            }
            
        
        })
};

ManageQuestion();

ViewAllEmployees()

function AddEmployees() {
    inquirer
    .prompt([
        {
            name: "Employee's first name",
            type: "input",
            message:"What is the employee's first name?"
        },
        {
            name: "Employee's last name",
            type: "input",
            message:"What is the employee's last name?"
        },
        {
            name: "Employee's role",
            type: "list",
            message:"What is the employee's role?",
            choices: ["Account Manager","Accountant","Legal Team Lead","Lawyer", "Sales Lead", "Salesperson", "Lead Engineer"]// {roles.name}
        },
        {
            name: "Employee's manager",
            type: "list",
            message:"Who is the employee's manager?",
            choices: []// [{manger}]
        },
    ])
};

function UpdateEmployeeRole(){
    inquirer
        .prompt([
            {
                name: "Update employee's role",
            type: "input",
            message:"Which employee's role do you wnat to update?",
            choices: ["Sales Lead", "Salesperson", "Lead Engineer"] //[{employee}]
            },
            {
                name: "Update role",
            type: "list",
            message:"Which role do you want to assign the selected employee?",
            choices: ["Sales Lead", "Salesperson", "Lead Engineer"]//[{roles.title}]
            }
        ])
}

ViewAllRoles()

function AddRole(){
    inquirer
    .prompt([
        {
            name: "Rolename",
            type: "input",
            message:"What is the name of the role?"
        },
        {
            name: "RoleSalary",
            type: "input",
            message:"What is the salary of the role?"
        },
        {
            name: "Department",
            type: "list",
            message:"Which department does the role belong to?",
            choices: ["Engineering", "Finance", "Legal", "Sales", "Service"]
        },
        
    ])
};

ViewAllDepartment()

function AddDepartment(){
    inquirer
        .prompt([
            {
                name: "Department name",
                type: "input",
                message:"What is the name of the department?"
            },
        ])

}

DeleteDepartment()

DeleteRoles()

DeleteEmployee()
