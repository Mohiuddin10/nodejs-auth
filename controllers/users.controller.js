const UsersAuth = require("../models/users.model");
// const md5 = require("md5");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

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
        const email = req.body.email;

        const hash = bcrypt.hashSync(req.body.password, salt);
        const password = hash;
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
        const email = req.body.email;
        const password = req.body.password;
        const findUser = await UsersAuth.findOne({email});
        bcrypt.compare(password, findUser.password, function(err, match) {
            if (match) {
                return res.send({
                    success: true,
                    message: "Valid user",
                    data: findUser
                })
            } else {
                return res.status(404).send({
                    success: false,
                    message: "invalid user"})
            }
        });
    } catch (error) {
        
    }

    // try {
    //     const email = req.body.email;
    //     const password = req.body.password;
    //     console.log(req.body);
    //     let findEmail = await UsersAuth.findOne({ email: email });
    //     if (findEmail) {
    //         bcrypt.compare(password, hash, function (err, res) {
    //             if (res === true) {
    //                 res.status(201).send({
    //                     success: true,
    //                     message: "users valid",
    //                     data: findEmail
    //                 })
    //             } else {
    //                 res.status(201).send({
    //                     success: false,
    //                     message: "users not valid",
    //                 })
    //             }
    //         });
    // } catch (error) {
    //     res.status(500).send({
    //         success: false,
    //         message: error.message
    //     })
    // }
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