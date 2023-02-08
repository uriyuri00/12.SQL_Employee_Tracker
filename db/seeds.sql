INSERT INTO department (name)
VALUES  ( "Sales"),
        ( "Engineering"),
        ( "Finance"),
        ( "Legal");
        

INSERT INTO roles (title, salary, department_id)
VALUES  ("Sales Lead", 100000, 01 ),
        ("Salesperson", 80000, 01 ),
        ("Lead Engineer", 150000, 02 ),
        ("Software Engineer", 150000, 02),
        ("Account Manager", 160000, 03 ),
        ("Accountant", 125000, 03),
        ("Legal Team Lead", 250000, 04),
        ("Lawyer", 190000, 04);

        



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 001, 1111 ),
       ("Mike", "Chan", 002, NULL),
       ("Ashley", "Rod", 003, 2222 ),
       ("Kevin", "Tutu", 004, NULL),
       ("Kunal", "Singh", 005, 3333 ),
       ("Malia", "Brown", 006, NULL),
       ("Sarah", "Lourd", 007, 4444 ),
       ("Tom", "Allen", 008, NULL);
       