//Version 1
require('dotenv').config();

const   express         = require("express"),
        app             = express(),
        bodyParser      = require("body-parser"),
        mongoose        = require("mongoose"),
        flash           = require("connect-flash"),
        passport        = require("passport"),
        LocalStrategy   = require("passport-local"),
        methodOverride  = require("method-override"),
        nodemailer      = require('nodemailer'),
        bcrypt          = require("bcryptjs"),
        sass            = require("sass"),
        crypto          = require("crypto");

// const result = sass.renderSync({file: "public/stylesheets/app.scss"});
const url = process.env.DATABASEURL; // 
mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true});
//app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use(flash());


//moment config
//app.locals.moment = require('moment');

//passport config
app.use(require("express-session")({
    secret: process.env.EXPRESSSECRET, resave: false, saveUninitialized: false
}));
// app.use(passport.initialize());
// app.use(passport.session());
//passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next)=>{
//     res.locals.currentUser = req.user;
//     res.locals.error = req.flash("error");
//     res.locals.success = req.flash("success");
//     next();
// });

app.get("/", (req, res)=>{
    res.render("index");
});

app.listen(process.env.PORT, process.env.IP, ()=>{ //8080 || 
   console.log("Fonagy Designs Server Has Started");
});