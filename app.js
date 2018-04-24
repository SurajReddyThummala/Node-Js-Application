var express = require("express");
var app = express();
var bodyParser =require("body-parser");
var Campground = require("./models/camp");
var flash = require("connect-flash");
//var seeds = require("./models/seeds");

var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var User = require("./models/user");
var Comment = require("./models/comment");


var commentroutes = require("./routes/comments");
var campgroundroutes = require("./routes/campground");
var authenticateroutes = require("./routes/authenticate");
var methodOverride = require("method-override");

//seeds();

mongoose.connect("mongodb://localhost/Scamp");

app.locals.moment = require("moment");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());
//passport configuration
app.use(require("express-session")({
    secret: "suraj is very good boy",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res, next){
   res.locals.currentuser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use(commentroutes);
app.use(authenticateroutes);
app.use(campgroundroutes);


app.listen(process.env.PORT, process.env.IP, function(){
    
    console.log("Scamp app server started!");
});