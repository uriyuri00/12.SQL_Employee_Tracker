const figlet = require('figlet');
const inquirer = require('inquirer')
const express = require("express") 
const mysql = require('mysql2');

const fs= require("fs")
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();



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

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'MaryJane3499+',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);






app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
