const { getUsers } = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getUsers)

module.exports = {router}