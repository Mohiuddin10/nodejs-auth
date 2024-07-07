const mongoose = require("mongoose");
var encrypt = require('mongoose-encryption');

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

UsersAuth.migrateToA(function(err){
    if (err){ throw err; }
    console.log('Migration successful');
});

var encKey = process.env.ENC_Key

module.exports = UsersAuth;