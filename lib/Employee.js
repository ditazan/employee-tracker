const db = require('../db/connection');
const Company = require('./Company');
const Role = require('./Role')

class Employee extends Company {
    constructor() {
        super();
        this.db = super.db;
      }
    
      getAll() {
        const sql = "SELECT * FROM employees";
        db.query(sql, (err, res) => {
          if (err) {
            res.serverStatus(500).json({ error: err.message });
            return;
          }
          console.table(res);
          console.log(res);
        });
      }
}

module.exports = Employee;