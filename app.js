const express = require("express");
const mongoose = require("mongoose");
const {router: usersRouter} = require("./router/users.router")
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use("/users", usersRouter)

module.exports = {app};