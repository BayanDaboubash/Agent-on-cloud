const connection = require("../../../db/db");
const bcrypt = require("bcrypt");

const createNewUser = async (req, res) => {
  const { firstName, lastName, phone, email, password, role_id } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const emailAfterLowercase = email.toLowerCase();
  const query_insert = `INSERT INTO users (firstName,lastName,phone,email,password,role_id) VALUES (?,?,?,?,?,?)`;
  const data_insert = [firstName, lastName, phone, emailAfterLowercase, hashPassword, role_id];
  await connection.promise().query(query_insert, data_insert);
  const query_select = `SELECT * FROM users WHERE email= ? && password = ?`;
  const data_select = [emailAfterLowercase, hashPassword];
  const userAdded = await connection.promise().query(query_select, data_select);
  res.status(201).json(userAdded[0]);
};

module.exports = {
  createNewUser,
};