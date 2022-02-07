const db = require("./../../db/db");

const deleteDate = (req, res) => {
    const dateId = req.params.id;
    const data = [dateId];
    const command = `UPDATE posts SET is_deleted =1 WHERE date_id= ?`;
    db.query(command, data, (err, results) => {
      if (err) return res.status(404);
      res.json("This post is delete successful");
      res.status(202);
    });
  };

  module.exports = {
    deleteDate,
  };