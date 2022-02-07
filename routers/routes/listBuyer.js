const express = require("express");
const {
    getAllListBuyer
} = require("./../controllers/listBuyer");
const getAllListBuyerRouter = express.Router();

getAllListBuyerRouter.get("/listBuyer", getAllListBuyer);
module.exports = getAllListBuyerRouter;