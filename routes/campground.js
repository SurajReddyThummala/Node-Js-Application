var express = require("express");

var router = express.Router();
var Campground = require("../models/camp.js");

router.get("/camp", function(req,res){
                var noMatch = "";

    if(req.query.search){
     const regex = new RegExp(escapeRegex(req.query.search), 'gi');

        Campground.find({"name": regex} , function(err, newly){
    if(err){
        console.log(err);
    }else{
            if(newly.length < 1){
                noMatch = "Sorry,Restaurant not Found!";
            }
           res.render("index" , {camp: newly , currentuser: req.user, noMatch: noMatch}) ;
    } 
    
     
 });
    
    }
    else {
    
 Campground.find({} , function(err, newly){
    if(err){
        console.log(err);
    }else{
           res.render("index" , {camp: newly , currentuser: req.user , noMatch: noMatch  }) ;
    } 
    
     
 });
    }
});


router.post("/camp" ,isLoggedIn ,function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description ;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    
    var c ={name: name, image: image , description : desc , author: author};
    
        Campground.create( c , function (err , abc){
           if(err){
               console.log(err);
           } else {
                res.redirect("/camp");
}
        });
});



router.get("/camp/new" , isLoggedIn, function(req, res) {
   res.render("new"); 
});


router.get("/camp/:id" , function(req, res) {
    
    Campground.findById(req.params.id).populate("comments").exec(function(err, found){
       if(err){
           console.log(err);
       } else{
                console.log(found);
               res.render("show" , {camp : found});

       }
        
    });
});


//edit 

router.get("/camp/:id/edit" , check , function(req, res){
    Campground.findById(req.params.id, function(err, camp) {
       if(err){
           res.redirect("/camp");
       } else {
           
           res.render("editpost" , {camp: camp});
       }
    });
    
    
} );

//update


router.put("/camp/:id" , function(req, res){
    
   Campground.findByIdAndUpdate(req.params.id , req.body.data , function(err, camp){
       if(err){
           res.redirect("/camp");
       }else{
           res.redirect("/camp/" + req.params.id);
       }
       
   }) ;
});

//delete

router.delete("/camp/:id" ,check ,function(req, res){
   Campground.findByIdAndRemove(req.params.id , function(err){
      if(err){
          res.redirect("/camp");
      } else {
          
          res.redirect("/camp");
      }
   });
});



function isLoggedIn (req, res, next){
    if(req.isAuthenticated()){
        
        return next();
    }
    req.flash("error", " Please Login ")
    res.redirect("/login");
}


function check(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id , function(err , camp){
       if(err){
           res.redirect("back");
       } else{
           if(camp.author.id.equals(req.user._id))
           {
            next();
           } else {
               req.flash("error" , "You don't have permission");
                res.redirect("back");
            }
       }
    });
      
    }else {
            res.redirect("back");
    }
    
}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;