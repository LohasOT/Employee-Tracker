use employee_db;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, manager_id, role_id)
VALUES
    ('Big', 'Mike', 1, NULL),
    ('Small', 'Mike', 2, 1),
    ('Mike', 'Schraf', 3, NULL),
    ('Mine', 'Craft', 4, 3),
    ('League', 'Legend', 5, NULL),
    ('Malia', 'Blue', 6, 5),
    ('Oliver', 'Deze', 7, NULL),
    ('Tomberry', 'Stun', 8, 7);
