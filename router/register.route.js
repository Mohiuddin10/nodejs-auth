const { registerUser, createUser } = require("../controllers/register.controller");

const router = require("express").Router();

// register get 
router.get("/", registerUser);

// ======> register post 
router.post("/", createUser)

module.exports = router;