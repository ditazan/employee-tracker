const inquire = require("inquirer");
const cTable = require("console.table");
const Employee = require("./lib/Employee");
const Role = require("./lib/Role");
const Department = require("./lib/Department");

const startMenu = [
  {
    message: "Welcome !",
    type: "list",
    name: "choice",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Employee Role",
      "EXIT",
    ],
    loop: false,
  },
];

const startApp = async  () => {
  inquire
    .prompt(startMenu)
    .then((data) => {
      switch (data.choice) {
        case "View All Departments":
            Department.getAll();
            startApp();
          break;

        case "View All Roles":
            Role.getAll();
            startApp();
          break;

        case "View All Employees":
            Employee.getAll();
            startApp();
          break;

        case "Add Department":
            Department.addNew();
            startApp();
          break;

        case "Add Role":
            Role.addNew();
            startApp();
          break;

        case "Add Employee":
            Employee.addNew();
            startApp();
          break;

        case "Update Employee Role":
            startApp();
          break;
        case "EXIT":
          process.exit(1);
          break;
      }
    })
    .catch((err) => {
      console.log(`Error has occured:`, err);
    });

};

startApp();