var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat-app");

var CatSchema = new mongoose.Schema({
    name: String,
    Age: Number,
    Gender: String
});

var Cat = mongoose.model("Cat" , CatSchema);

//add cats

var a = new Cat({
    
    name: "Sunil",
    age: 21,
    gender: "male"
});
a.save(function(err , cat){
    if(err){
        console.log("Error");
    }
    else
    {
        console.log(a);
    }
});