
//========Comments routes

var express = require("express");

var router = express.Router();

var Campground = require("../models/camp.js");
var Comment = require("../models/comment.js");



router.get("/camp/:id/comments/new" , isLoggedIn, function(req, res) {
    Campground.findById(req.params.id, function(err, camp){
        if(err){
            console.log(err);
        }else{
             res.render("comments/New" , {camp: camp});
            
            
        }
        
    });
    
});

router.post("/camp/:id/comments" , isLoggedIn , function(req, res){
   Campground.findById(req.params.id , function(err, camp) {
       if(err){
           console.log(err);
       }else{
        //   console.log(req.body.comment);
          Comment.create(req.body.comment, function(err, comment){
              if(err){
                  console.log(err);
              } else{
                       comment.author.id = req.user._id;
                       comment.author.username = req.user.username;
                     comment.save();
                  camp.comments.push(comment);
                  camp.save();
                   req.flash("success" , "Comment added");
                  res.redirect("/camp/" + camp._id);
              }
          });
      }
   }) ;
});
         
         router.get("/camp/:id/comments/:comment_id/edit" , checkCommentOwner , function(req, res){
             Comment.findById(req.params.comment_id, function(err, fc) {
                if(err){
                    console.log(err);
                    res.redirect("/");
                } else{
             res.render("newcomment"  , {campground_id: req.params.id , comment: fc});
                  }
             });
         });
         
         
         router.put("/camp/:id/comments/:comment_id",checkCommentOwner,function(req, res){
            Comment.findByIdAndUpdate(req.params.comment_id , req.body.comment , function(err, uc){
               if(err){
                   res.redirect("back");
               } else{
                   res.redirect("/camp/" + req.params.id);
               }
            });
         } );
         
         router.delete("/camp/:id/comments/:comment_id",checkCommentOwner ,function(req, res){
            Comment.findByIdAndRemove(req.params.comment_id , function(err){
                if(err){
                res.redirect("back");    
                }else{
                    res.redirect("/camp/" + req.params.id);
                }
            }) ;
             
         });
         
         
     function isLoggedIn (req, res, next){
    if(req.isAuthenticated()){
        
        return next();
    }
        req.flash("error", " Please Login ")

    res.redirect("/login");
}


function checkCommentOwner(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id , function(err , camp){
       if(err){
           res.redirect("back");
       } else{
           if(camp.author.id.equals(req.user._id))
           {
            next();
           } else {
               req.flash("error" , "Please log in");
                res.redirect("back");
            }
       }
    });
      
    }else {
            res.redirect("back");
    }
    
}

module.exports  = router;         