const db = require("../db/connection");
const Company = require("./Company");
const cTable = require("console.table");
const inquire = require("inquirer");

const deptQuestions = [
  {
    message: "Name of new department ?",
    type: "input",
    name: "name",
    validate: (input) => {
      if (input && input.length < 31) {
        return true;
      }
      console.log("Invalid name");
      return false;
    },
  },
];

class Department extends Company {
  constructor() {
    super();
    this.db = super.db;
  }

  static async getAll() {
    const sql = "SELECT * FROM departments";
    db.query(sql, (err, res) => {
      if (err) {
        res.serverStatus(500).json({ error: err.message });
        return;
      }
      console.table(res);
      console.log(res);
    });
  }

 static addNew() {
    inquire.prompt(deptQuestions).then((data) => {
      const sql = `INSERT INTO departments (name) VALUES (?)`;
      const params = [data.name];

      db.query(sql, params, (err, res) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        console.log(`**** Department : ${data.name} was successfully added ! ****`);
      });
    });
  }
}

module.exports = Department;
