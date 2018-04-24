var mongoose =require("mongoose");

//schema
var campschema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: { 
        id: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        } , 
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
        ]
});
//model
module.exports = mongoose.model("Campground" , campschema);