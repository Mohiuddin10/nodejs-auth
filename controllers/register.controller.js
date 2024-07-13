const { hash } = require("bcryptjs");
const UsersAuth = require("../models/users.model");
const bcrypt = require('bcryptjs');
require("dotenv").config();

const saltRounds = 10;


const registerUser = (req, res) => {
    res.render("register")
}



const createUser = async (req, res) => {
    try {
        const email = req.body.email;
        let password = bcrypt.hashSync(req.body.password, saltRounds);;
        let newUser = {email, password}
        console.log(newUser);
        const findUser = await UsersAuth.findOne({email});
        if (findUser) {
         res.status(400).send({success: false, message: "user already registered"})}
         else {
            newUser = await new UsersAuth(newUser);
            newUser.save()
            res.send(newUser)
        // ===> password encryption done 
        // ====> need to match password in login and user passport local session
         }
         
         
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}
module.exports = { registerUser, createUser };