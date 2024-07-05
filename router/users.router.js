const { getUsers, adduser } = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getUsers)

router.post("/register", adduser)

module.exports = {router}