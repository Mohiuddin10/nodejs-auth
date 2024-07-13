const {loginUser, userLoginWithPassword} = require("../controllers/login.controller")
const router = require("express").Router();


// login get 
router.get("/", loginUser);

//=======> login post
router.post("/", userLoginWithPassword)

module.exports = router;
