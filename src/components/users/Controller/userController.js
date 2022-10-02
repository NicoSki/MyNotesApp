const passport = require("passport");
const passportLocal = require("passport-local").Strategy;

let DAO = require("../../../models/userModel");


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await DAO.findById(id);
    done(null, user);
});

//*SIGN IN:
passport.use("signin-user", new passportLocal({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, async (req, email, password, done) => {

    const user = await DAO.findOne({ "email": email });

    if (user) {
        return done(null, false, req.flash("warning_msg", "The Email has already been taken 😫"));
    } 

        const newUser = new DAO();
        newUser.email = email;
        newUser.nickname = req.body.nickname;
        newUser.password = newUser.encryptPassword(password);
        newUser.date = new Date().toLocaleDateString();
        await newUser.save();
        done(null, newUser);
    
}));

//*LOG IN:
passport.use("login-user", new passportLocal({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, async(req, email, password, done)=>{

    const user = await DAO.findOne({ "email": email });

    if(!user){
        return done(null, false, req.flash("error_msg", "User Not Found🤔"));
    }

    if(!user.comparePassword(password)){
        return done(null, false, req.flash("error_msg", "Wrong Password... Try Again😶‍🌫️"));
    }

    return done(null, user);    

}));