let express = require("express");
let app = express();
let path = require("path");
let engine = require("ejs-mate");
let { config } = require("./config");
let cors = require("cors");
let morgan = require("morgan");
let flash = require("connect-flash");
let session = require("express-session");
let passport = require("passport");
require("./components/users/Controller/userController");

//*mongoDB
let {connection} = require("./config/database/index");
connection();


//*Settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
let serverRoutes = require("./routes");

//*Views
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");

//*Middlewares
app.use(cors("*"));
app.use(morgan("tiny"));
app.use(session({
    secret: "MyNoteAppAsADeveloper",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//*Global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.warning_msg = req.flash("warning_msg");
    res.locals.user = req.user;
    
    next();
});

//*Routes
serverRoutes(app);

//*Server
app.listen(config.port, () => {
    console.log(`Server listening on http://localhost:${config.port}`);
});
