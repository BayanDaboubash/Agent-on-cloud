const db = require("./../../db/db");

const getAllListDate = (req, res) => {
  const command = `SELECT * FROM dates
  WHERE user_id= ? AND is_deleted=0;`;
  const arr = [req.params.id];
  db.query(command, arr, (err, result) => {
    if (err) return res.status(404);
    res.status(200);
    res.json(result);
  });
};

module.exports = {
    getAllListDate
};