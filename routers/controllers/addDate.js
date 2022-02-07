const db = require("./../../db/db");

const adddate = (req, res) => {
    const newDate = {
      name: req.body.name,
      date: req.body.date,
      phone: req.body.phone,
      user_id: req.body.user_id,
    };
    console.log(newDate);
    const command = `INSERT INTO dates (name, date, phone, user_id) VALUES (?, ? ,?, ?);`;
    const data = [
      newDate.name,
      newDate.date,
      newDate.phone,
      newDate.user_id,
    ];
    db.query(command, data, (err, result) => {
      if (err) return res.status(404);
      res.status(201);
      res.json(result);
    });
  };

  module.exports = {
    adddate,
  };
  