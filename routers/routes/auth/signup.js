const express = require("express");
const { createNewUser } = require("../../controllers/auth/signup");

const registerRouter = express.Router();

registerRouter.post("/register", createNewUser);


module.exports = registerRouter;