const { registerUser } = require("../controllers/register.controller");

const router = require("express").Router();

router.get("/", registerUser);

module.exports = router;