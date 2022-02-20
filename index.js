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

const startApp = () => {
  inquire
    .prompt(startMenu)
    .then((data) => {
      switch (data.choice) {
        case "View All Departments":
            Department.getAll();
          break;

        case "View Roles":
            Role.getAll();
          break;

        case "View All Employees":
          break;

        case "Add Department":
            Department.addNew();
          break;

        case "Add Role":
          break;

        case "Add Employee":
          break;

        case "Update Employee Role":
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