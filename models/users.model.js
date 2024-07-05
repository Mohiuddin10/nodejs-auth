const mongoose = require("mongoose");

const user = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

const UsersAuth = mongoose.model("userAuth", user);

module.exports = UsersAuth;