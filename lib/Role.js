const inquirer = require("inquirer");
const db = require("../db/connection");
const Company = require("./Company");
const Department = require("./Department");

const roleQuestions = [
  {
    message: "Title of new role ?",
    type: "input",
    name: "title",
    validate: (input) => {
      if (input && input.length < 31) {
        return true;
      }
      console.log("Invalid title");
      return false;
    },
  },
  {
    message: "Salary of new role ?",
    type: "number",
    name: "salary",
    validate: (input) => {
      if (typeof input === "number" && 9999999999999.99 > input > 0) {
        return true;
      }
      console.log("Invalid salary");
      return false;
    },
  },
  {
    message: "What department is this role ?",
    name: "department_id",
    type: "list",
    choices: Department.getAll().map((item) => {
      return { name: item.name, value: item.id };
    }),
  },
];

class Role extends Company {
  constructor() {
    super();
    this.db = super.db;
  }

  static async getAll() {
    const sql =
      " SELECT role.id, role.title, role.salary, departments.name AS department_name  LEFT JOIN departments ON role.department_id = departments.id;";
    db.query(sql, (err, res) => {
      if (err) {
        res.serverStatus(500).json({ error: err.message });
        return;
      }
      console.table(res);
    });
  }

  static addNew() {
    inquirer.prompt(roleQuestions).then((data) => {
      const sql = `INSERT INTO roles (title, salary, demartment_id)
          VALUES (?, ?, ?)`;
      let { title, salary, department_id } = data;
      db.query(sql, [title, salary, department_id], (err, res) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        console.log(`Role : ${title} was successfully added !`);
      });
    });
  }
}

module.exports = Role;
