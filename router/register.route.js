const { registerUser } = require("../controllers/register.controller");

const router = require("express").Router();

// register get 
router.get("/", registerUser);

// ======> register post 

module.exports = router;