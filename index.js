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
  let selected;

  try {
    const { choice } = inquirer.prompt(startMenu);
    selected = choice;
  } catch (err) {
    console.log(err);
  }

  try {
    switch (selected) {
      case "View All Departments":

        break;

      case "View Roles":

        break;

      case "View All Employees":

        break;

      case "Add Department":

        break;

      case "Add Role":

        break;

      case "Add Employee":

        break;

      case "Update Employee Role":
          
        break;
    }
  } catch (err) {
    console.log(err);
  }
};
