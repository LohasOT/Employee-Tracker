CREATE DATABASE employee_db;

use employee_db;

CREATE TABLE department (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(30) NOT NULL
);
    
CREATE TABLE role (
	id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    departmentID INT NOT NULL,
    FOREIGN KEY (departmentID) REFERENCES department(id)
);

CREATE TABLE employee (
	id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    managerID INT,
    roleID INT NOT NULL,
    FOREIGN KEY (roleID) REFERENCES role(id),
    FOREIGN KEY (managerID) REFERENCES employee(id)
);