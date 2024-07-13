const UsersAuth = require("../models/users.model");

const loginUser = (req, res) => {
    res.render("login");
}

const userLoginWithPassword = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const matchUser = await UsersAuth.findOne({email});
        console.log(matchUser);
    } catch (error) {
        
    }
}

module.exports = { loginUser, userLoginWithPassword };