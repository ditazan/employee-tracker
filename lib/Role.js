const db = require("../db/connection");
const Company = require("./Company");
const Department = require("./Department");

class Role extends Company {
  constructor() {
    super();
    this.db = super.db;
  }

  getAll() {
    const sql = "SELECT * FROM roles";
    db.query(sql, (err, res) => {
      if (err) {
        res.serverStatus(500).json({ error: err.message });
        return;
      }
      console.table(res);
    });
  }
}

module.exports = Role;
