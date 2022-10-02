let { Router } = require("express");
const passport = require("passport");


module.exports = app => {
    let router = new Router();

    app.use("/", router);


    //*SING IN
    router.get("/signin", (req, res) => {
        res.render("users/signin");
    });

    router.post("/signin", passport.authenticate("signin-user", {
        successRedirect: "/allNotes",
        failureRedirect: "/signin",
        passReqToCallback: true
    }));


    //*LOG IN
    router.get("/login", (req, res) => {
        res.render("users/login");
    });

    router.post("/login", passport.authenticate("login-user", {
        successRedirect: "/allNotes",
        failureRedirect: "/login",
        passReqToCallback: true
    }));


    //*LOG OUT
    router.get("/logout", (req,res)=>{
        req.logout();
        res.redirect("/");
    });

}

