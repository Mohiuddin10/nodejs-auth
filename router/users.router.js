const { getUsers, addUser, deleteUser, loginUser } = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getUsers)

router.post("/register", addUser)

router.post("/login", loginUser)

router.delete("/:id", deleteUser)

module.exports = {router}