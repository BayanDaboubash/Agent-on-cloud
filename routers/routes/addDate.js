const express = require("express");
const {
adddate,
} = require("./../controllers/addDate");
const addDateRouter = express.Router();

addDateRouter.post("/addDate", adddate);
module.exports = addDateRouter;
