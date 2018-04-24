var express = require("express");

var router = express.Router();
var passport = require("passport");
var User = require("../models/user.js");

router.get("/", function(req,res){
    
    res.render("landing");
});



//Authentication routes

router.get("/register" , function(req, res) {
   res.render("register") ;
});

router.post("/register" , function(req, res) {
    var newUser= new User({username: req.body.username});
    User.register(newUser , req.body.password , function(err , user){
       if(err){
           req.flash("error", err.message);
           res.redirect("register");
       } else{
           passport.authenticate("local")(req, res, function(){
               req.flash("success", "Welcome to " + user.username);
              res.redirect("/camp") ;
               
           });
       }
    });
});


//login

router.get("/login", function(req, res) {
    res.render("login");
});


// router.post("/login" , passport.authenticate("local",
// {
//     successFlash: "Welcome back",
//     successRedirect: "/camp",
    
//     failureRedirect: "/login"

// }),function(req, res){
// } );

router.post("/login", function(req,res,next){
    passport.authenticate("local" , 
    {successReturnToOrRedirect:"/camp",failureRedirect:"/login"
    ,successFlash:"Welcome back "+req.body.username+"!"})
    (req,res,next);})

//logout

router.get("/logout" , function(req, res) {
   req.logout(); 
   req.flash("success" , "We miss you, Please come back!");
   res.redirect("/camp");
});


//isLoggedIn function 

function isLoggedIn (req, res, next){
    if(req.isAuthenticated()){
        
        return next();
    }
        req.flash("error", " Please Login ")
    res.redirect("/login");
}

module.exports = router;