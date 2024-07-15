const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const ejs = require("ejs");
const passport = require("passport");
const MongoStore = require('connect-mongo');
const session = require("express-session");
const { router: usersRouter } = require("./router/users.router");
const registerRoute = require("./router/register.route");
const loginRoute = require("./router/login.route");
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set("view engine", "ejs");


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    collectionName: "sessions",
  })
//   cookie: { secure: true }
}))


app.use(passport.initialize())
app.use(passport.session())

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

// login route 
app.use("/login", loginRoute)

// home page 
app.get("/", (req, res) => {
    res.render("home");
})

//======> profile get - private route 

//====> 404 route

// ======> server error

module.exports = { app, connectDB };