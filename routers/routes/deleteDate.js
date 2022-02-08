const express = require("express");
const {
    deleteDate
} = require("./../controllers/deleteDate");
const deleteDateRouter = express.Router();

deleteDateRouter.put("/deleteDate", deleteDate);
module.exports = deleteDateRouter;