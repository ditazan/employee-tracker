const inquirer = require("inquirer");
const db = require("../db/connection");
const Company = require("./Company");
const Role = require("./Role");

const empQuestions = [
  {
    message: "First Name of Employee ?",
    type: "input",
    name: "firstName",
    validate: (input) => {
      if (input && input.length < 31) {
        return true;
      }
      console.log("Invalid name");
      return false;
    },
  },
  {
    message: "Last Name of Employee ?",
    type: "input",
    name: "lastName",
    validate: (input) => {
      if (input && input.length < 31) {
        return true;
      }
      console.log("Invalid name");
      return false;
    },
  },
  {
    message: "Employee role ?",
    name: "roleId",
    type: "list",
    choices: Role.getAll().map((item) => {
      return { name: item.title, value: item.id };
    }),
  },
  {
    message: "Manager ID ?",
    name: "managerId",
    type: "list",
    choices: Employee.getAll().map((item) => {
      return { name: item.first_name + " " + item.last_name, value: item.id };
    }),
  },
];

class Employee extends Company {
  constructor() {
    super();
    this.db = super.db;
  }

  static async getAll() {
    const sql = "SELECT * FROM employees ";
    db.query(sql, (err, res) => {
      if (err) {
        res.serverStatus(500).json({ error: err.message });
        return;
      }
      console.table(res);
    });
  }

  static addNew() {
    inquirer.prompt(empQuestions).then((data) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`;
      let { firstName, lastName, roleId, managerId } = data;
      db.query(sql, [firstName, lastName, roleId, managerId], (err, res) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        console.log(`Employee : ${firstName} was successfully added !`);
      });
    });
  }
}

module.exports = Employee;
