const {loginUser} = require("../controllers/login.controller")
const router = require("express").Router();


// login get 
router.get("/", loginUser);

//=======> login post


module.exports = router;
