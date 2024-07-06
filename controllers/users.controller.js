const UsersAuth = require("../models/users.model");

// get all users 
const getUsers = async (req, res) => {
    try {
        const users = await UsersAuth.find();
        console.log(users);
        if (users) {
            res.status(201).send({
                success: true,
                message: "all users loaded successfully",
                data: users
            })
        } else {
            res.status(404).send({
                success: false,
                message: "users load failed",
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}
// add user 
const addUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = await new UsersAuth({ email, password });
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
            message: error.message
        })
    }
}

// users match

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(req.body);
        let findEmail = await UsersAuth.findOne({email: email});
        if (findEmail) {
            if (findEmail.password === password){
                res.status(201).send({
                    success: true,
                    message: "users valid",
                    data: findEmail
                })
            } else {
                res.status(201).send({
                    success: false,
                    message: "invalid users"
                })
            }
        } else{
            res.status(404).send({
                success: false,
                message: "No such user found in Database"
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

// delete user 

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await UsersAuth.findByIdAndDelete({ _id: id })
        if (deletedUser) {
            res.status(201).send({
                success: true,
                message: "user delete successful",
                data: deletedUser
            })
        } else {
            res.status(404).send({
                success: false,
                message: "delete operation failed"
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { getUsers, addUser, deleteUser, loginUser };