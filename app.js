const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { router: usersRouter } = require("./router/users.router")
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected");
    } catch (error) {
        console.log("DB connection failed");
        process.exit(1);
    }
}

app.use("/users", usersRouter)

module.exports = { app, connectDB };