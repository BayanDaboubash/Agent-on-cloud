const db = require("../../db/db");

const getAllListSeller = (req, res) => {
  const command = `SELECT * FROM users
  WHERE role_id= 1 AND is_deleted=0;`;
  db.query(command, (err, result) => {
    if (err) return res.status(404);
    res.status(200);
    res.json(result);
  });
};

module.exports = {
  getAllListSeller
};