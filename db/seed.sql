-- //insert statements =[-p09l]

insert into department (name) VALUES ('Sales'),('Marketing'),('Human Resources');
insert into role (title, salary, department_id) VALUES ('Sales Manager', '85000', '1'), ('Marketing Director', '90000', '2');
insert into employee(first_name, last_name, role_id, manager_id) VALUES ('Jack', 'Wright', 1, 2), ('brian', 'Smith', 1, 2);