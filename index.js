var inquirer = require("inquirer");
var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password",
  database: "employee_tracker",
});

const startApplication = () => {
  return inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "list",
        name: "option",
        message: "Pick an option",
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
        ],
      },
    ])
    .then(function (answer) {
      console.log(answer);
      let option = answer.option;
      switch (option) {
        case "View Departments":
          viewDepartment();
          break;
        case "View Roles":
          viewRoles();
          break;
      }
    });
};

function viewDepartment() {
  const dataDpt = "SELECT department.name FROM department;";
  connection.query(dataDpt, function (err, result) {
    if (err) throw err;
    console.table(result);
    startApplication();
  });
}
function viewRoles() {
  const dataDpt =
    "SELECT role.title, role.salary, role.department_id FROM role;";
  connection.query(dataDpt, function (err, result) {
    if (err) throw err;
    console.table(result);
    startApplication();
  });
}
startApplication();
