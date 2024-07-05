const { getUsers, addUser } = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getUsers)

router.post("/register", addUser)

module.exports = {router}