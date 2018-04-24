var mongoose = require("mongoose");

//schema

var commentschema = new mongoose.Schema({
    text: String,
      createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        id: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
      username: String

        }
    
});

//model

module.exports = mongoose.model("Comment" , commentschema);


