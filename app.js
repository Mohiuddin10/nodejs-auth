const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const ejs = require("ejs");
const { router: usersRouter } = require("./router/users.router");
const registerRoute = require("./router/register.route");
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set("view engine", "ejs");

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

// register route 
app.use("/register", registerRoute);

// home page 
app.get("/", (req, res) => {
    res.render("home");
})

module.exports = { app, connectDB };