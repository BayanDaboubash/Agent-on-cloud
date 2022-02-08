const express = require("express");
const {
    getAllListSeller
} = require("../controllers/listSeller");
const getAllListSellerRouter = express.Router();

getAllListSellerRouter.get("/listSeller", getAllListSeller);
module.exports = getAllListSellerRouter;