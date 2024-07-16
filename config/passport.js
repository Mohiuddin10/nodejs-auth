const passport = require("passport");
const UsersAuth = require("../models/users.model")
const LocalStrategy = require("passport-local");
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy(
    async (email, password, done) => {
        try {
            const user = await UsersAuth.findOne({ email });
            if (!user) { return done(null, false, { message: "incorrect email" }); }
            if (!bcrypt.compare(password, user.password)) {
                return done(null, false, { message: "incorrect password" });
            }

            return done(null, user);
        } catch (error) {
            return done(err);
        }
    }
));


passport.serializeUser((user, done) => {
    done((null, user.id))
})

passport.deserializeUser(async(id, done) => {
    try {
        const user = await UsersAuth.findOne(id);
        done(null, user)
    } catch (error) {
        done(error, false)
        
    }
})