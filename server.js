// imports
const figlet = require('figlet');
const inquirer = require('inquirer')
const express = require("express") 
const mysql = require('mysql2');
const table = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();


// middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

figlet('Employee\n    Trancker!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
  },
  // console.log(`Connected to the employee_db database.`)
);


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
          if( result.Question === 'View All Employees'){
              ViewAllEmployees();
          }
          if( result.Question === 'Add Employee'){
              AddEmployees();
          }
          if( result.Question === 'Update Employee Role'){
              UpdateEmployeeRole();
          }
          if( result.Question === 'View All Roles'){
              ViewAllRoles();
          }
          if( result.Question === 'Add Role'){
              AddRole();
          }
          if( result.Question === 'Veiw All Department'){
              ViewAllDepartment();
          }
          if( result.Question === 'Add Department'){
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


function ViewAllEmployees(){
    const sql = `SELECT
     employee.id AS id,
     employee.first_name AS first_name, 
     employee.last_name AS last_name,
     roles.title AS title, 
     department.name AS department, 
     roles.salary AS salary,
     employee.manager_id
     FROM employee
     JOIN roles   ON roles.id = employee.role_id
     JOIN department ON roles.department_id = department.id`;
    db.query(sql,(err, rows) => {
        if(err){
            throw err
        }
        console.log("\n")
        console.table(rows);
        return ManageQuestion();
    })
};

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
  .then(function(answers){
      this.fir
      // const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github );
      // employees.push(engineer);
      ManageQuestion();
  })
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

function ViewAllRoles(){
    const sql = `SELECT
    roles.id AS id, roles.title AS title, department.name AS department, roles.salary AS salary
    FROM roles
    JOIN department ON roles.department_id = department.id;`;
    db.query(sql,(err, rows) => {
        if(err){
            throw err
        }
        console.log("\n")
        console.table(rows);
        return ManageQuestion();
    })
};

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

function ViewAllDepartment(){
  const query = `SELECT
  * FROM department `;
        db.query(query, (err, res) => {
            if (err) {
                throw err;
            }
            console.log("\n")
            console.table(res);
            return ManageQuestion();
        })

}

function AddDepartment(){
  inquirer
      .prompt([
          {
              name: "Department name",
              type: "input",
              message:"What is the new name of the department?"
          },
      ])
      .then(answer => {
        const sql = `INSERT INTO departments (name)
        VALUES (?)`;
        const params = answer.name;
        db.query(sql, params, (err) => {
            if (err) {
                throw err;
            }
            console.log("Department added!");
            return ViewAllDepartment();
      })

});
}

// DeleteDepartment()

// DeleteRoles()

// DeleteEmployee()


// Quit()


//Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});



db.connect((err) => {
  if (err){
    throw err;
  }
  console.log("connect to the db");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    ManageQuestion();
  });
})
