const UsersAuth = require("../models/users.model");


const registerUser = (req, res) => {
    res.render("register")
}



const createUser = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        let newUser = {email, password}
        console.log(newUser);
        const findUser = await UsersAuth.findOne({email});
        if (findUser) {
         res.status(400).send({success: false, message: "user already registered"})}
         else {
            newUser = await new UsersAuth(newUser);
            newUser.save()
            res.send(newUser)
        
         }
         
         
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}
module.exports = { registerUser, createUser };