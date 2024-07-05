const { getUsers, addUser, deleteUser } = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getUsers)

router.post("/register", addUser)

router.delete("/:id", deleteUser)

module.exports = {router}