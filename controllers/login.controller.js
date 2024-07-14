const UsersAuth = require("../models/users.model");
const bcrypt = require('bcryptjs');

const loginUser = (req, res) => {
    res.render("login");
}

const userLoginWithPassword = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const matchUser = await UsersAuth.findOne({email});
        if (matchUser) {
            let matchPassword = await bcrypt.compare(password, matchUser.password);
            matchPassword ? res.send({success: true,
                message: "user valid",
                data: matchUser
            }) : res.send({success: false,
                message: "user is not valid"
            })
        }
    } catch (error) {
        res.status(500).send({message: "something broken"})
    }
}

module.exports = { loginUser, userLoginWithPassword };