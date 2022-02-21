const inquirer = require("inquirer");
const db = require("../db/connection");
const Company = require("./Company");
const Department = require("./Department");

class Role extends Company {
  constructor() {
    super();
    this.db = super.db;
  }

  static getAll= async function() {
    const sql =
      " SELECT roles.id as 'Role ID', roles.title as 'Role Title', roles.salary as 'Salary', departments.name AS department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id";
   db.query(sql, (err, res) => {
      if (err) {
        res.serverStatus(500).json({ error: err.message });
        return;
      }
      console.table(res);
    });
  }

  static addNew = async () => {
    const choices = await Department.getAll();
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
        choices: choices,
      },
    ];
    return new Promise((resolve, reject) => {
      inquirer.prompt(roleQuestions).then((data) => {
        const sql = `INSERT INTO roles (title, salary, department_id)
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
    });
  };
}

module.exports = Role;
