const express = require("express");
const {
    getAllListDate
} = require("./../controllers/listDate");
const listDateRouter = express.Router();

listDateRouter.post("/listDate/:id", getAllListDate);
module.exports = listDateRouter;