let notes = require("../components/notes");
let users = require("../components/users");
const passport = require("passport");

module.exports = app => {
app.get("/", (req,res)=>{
    res.render("main");
});

app.get("/about", (req,res)=>{
    res.render("about");
});

//*ALLOW DETERMINATE ACCESS:
function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/login');
  }

notes(app, isAuthenticated);
users(app);

}