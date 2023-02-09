SELECT
     roles.id AS id, roles.title AS title, department.name AS department, roles.salary AS salary
FROM roles
JOIN department ON roles.department_id = department.id;

SELECT
     employee.id AS id,
      employee.first_name AS first_name, 
      employee.last_name AS last_name,
      roles.title AS title, 
      department.name AS department, 
      roles.salary AS salary,
      employee.manager_id
FROM employee
JOIN roles   ON roles.id = employee.role_id
JOIN department ON roles.department_id = department.id;

SELECT  employee.id, 
        employee.first_name, 
        employee.last_name, 
        roles.title, 
        department.name AS department, 
        roles.salary, 
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
        FROM employee 
        LEFT JOIN roles on employee.role_id = roles.id 
        LEFT JOIN department on roles.department_id = department.id 
        LEFT JOIN employee manager on manager.id = employee.manager_id;

/*connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);