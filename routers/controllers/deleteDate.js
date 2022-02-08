const db = require("./../../db/db");

const deleteDate = (req, res) => {
  const {date_id} = req.body; 
    const command = `UPDATE dates SET is_deleted =1 WHERE date_id= ?`;
    db.query(command,[date_id],(err, results) => {
      if (err) return res.status(404);
      res.json("This post is delete successful");
      res.status(202);
    });
  };

  module.exports = {
    deleteDate,
  };