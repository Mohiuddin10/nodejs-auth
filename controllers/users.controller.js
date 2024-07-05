const UsersAuth = require("../models/users.model");


const getUsers = (req, res) => {
    res.send({message: "This will return all users"})
}

const adduser = (req, res) => {
    try {
        const {email, password} = req.body;
        const newUser = new UsersAuth({email, password});
        newUser.save();
        if (newUser) {
            res.status(201).send({
                success: true,
                message: "user added successfully",
                data: newUser
            })
        } else {
            res.status(404).send({
                success: false,
                message: "user add failed"
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "something broken"
        })
    }
}


module.exports = {getUsers, adduser};