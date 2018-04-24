var mongoose = require("mongoose");

var Campground = require("./models/camp");
var Comment = require("./models/comment");

var data = [ {
    name: "Denton",
    image: "",
    description:  "Dallas (/ˈdæləs/) is a city in the U.S. state of Texas. It is the most populous city in the Dallas–Fort Worth metroplex, which is the fourth most populous metropolitan area in the United States. The city's population ranks ninth in the U.S. and third in Texas after Houston and San Antonio.[8][9] The city's prominence arose from its historical importance as a center for the oil and cotton industries, and its position along numerous railroad lines. The bulk of the city is in Dallas County, of which it is the county seat; however, sections of the city are located in Collin, Denton, Kaufman, and Rockwall counties. According to the 2010 United States Census, the city had a population of 1,197,816. The United States Census Bureau's estimate for the city's population increased to 1,317,929 as of July 1, 2016.[10] Dallas is one of the fastest-growing cities in the United States. From 2010 to 2016, Dallas recorded the highest net domestic migration in the country, in excess of 300,000.[11] Overall, the Dallas–Fort Worth metro area had the second largest population increase among metro areas in the U.S., which recorded a population of 7,233,323 as of July 1, 2016, an increase of 807,000 people since the 2010 census.[12] Located in North Texas, Dallas is the main core of the largest metropolitan area in the South and the largest inland metropolitan area in the United States that lacks any navigable link to the sea.[13] Dallas and nearby Fort Worth were developed due to the construction of major railroad lines through the area allowing access to cotton, cattle, and later oil in North and East Texas. The construction of the Interstate Highway System reinforced Dallas's prominence as a transportation hub with four major interstate highways converging in the city, and a fifth interstate loop around it. Dallas developed as a strong industrial and financial center, and a major inland port, due to the convergence of major railroad lines, interstate highways, and the construction of Dallas/Fort Worth International Airport, one of the largest and busiest airports in the world.[14]"
},
{
    name: "Dallas",
    image: "https://www.dmagazine.com/wp-content/uploads/2015/07/downtown-dallas.jpg",
    description: "Dallas (/ˈdæləs/) is a city in the U.S. state of Texas. It is the most populous city in the Dallas–Fort Worth metroplex, which is the fourth most populous metropolitan area in the United States. The city's population ranks ninth in the U.S. and third in Texas after Houston and San Antonio.[8][9] The city's prominence arose from its historical importance as a center for the oil and cotton industries, and its position along numerous railroad lines. The bulk of the city is in Dallas County, of which it is the county seat; however, sections of the city are located in Collin, Denton, Kaufman, and Rockwall counties. According to the 2010 United States Census, the city had a population of 1,197,816. The United States Census Bureau's estimate for the city's population increased to 1,317,929 as of July 1, 2016.[10] Dallas is one of the fastest-growing cities in the United States. From 2010 to 2016, Dallas recorded the highest net domestic migration in the country, in excess of 300,000.[11] Overall, the Dallas–Fort Worth metro area had the second largest population increase among metro areas in the U.S., which recorded a population of 7,233,323 as of July 1, 2016, an increase of 807,000 people since the 2010 census.[12] Located in North Texas, Dallas is the main core of the largest metropolitan area in the South and the largest inland metropolitan area in the United States that lacks any navigable link to the sea.[13] Dallas and nearby Fort Worth were developed due to the construction of major railroad lines through the area allowing access to cotton, cattle, and later oil in North and East Texas. The construction of the Interstate Highway System reinforced Dallas's prominence as a transportation hub with four major interstate highways converging in the city, and a fifth interstate loop around it. Dallas developed as a strong industrial and financial center, and a major inland port, due to the convergence of major railroad lines, interstate highways, and the construction of Dallas/Fort Worth International Airport, one of the largest and busiest airports in the world.[14]"


},
{
    name: "Austin",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Austin_Evening.jpg/1200px-Austin_Evening.jpg ",
    description:  "Dallas (/ˈdæləs/) is a city in the U.S. state of Texas. It is the most populous city in the Dallas–Fort Worth metroplex, which is the fourth most populous metropolitan area in the United States. The city's population ranks ninth in the U.S. and third in Texas after Houston and San Antonio.[8][9] The city's prominence arose from its historical importance as a center for the oil and cotton industries, and its position along numerous railroad lines. The bulk of the city is in Dallas County, of which it is the county seat; however, sections of the city are located in Collin, Denton, Kaufman, and Rockwall counties. According to the 2010 United States Census, the city had a population of 1,197,816. The United States Census Bureau's estimate for the city's population increased to 1,317,929 as of July 1, 2016.[10] Dallas is one of the fastest-growing cities in the United States. From 2010 to 2016, Dallas recorded the highest net domestic migration in the country, in excess of 300,000.[11] Overall, the Dallas–Fort Worth metro area had the second largest population increase among metro areas in the U.S., which recorded a population of 7,233,323 as of July 1, 2016, an increase of 807,000 people since the 2010 census.[12] Located in North Texas, Dallas is the main core of the largest metropolitan area in the South and the largest inland metropolitan area in the United States that lacks any navigable link to the sea.[13] Dallas and nearby Fort Worth were developed due to the construction of major railroad lines through the area allowing access to cotton, cattle, and later oil in North and East Texas. The construction of the Interstate Highway System reinforced Dallas's prominence as a transportation hub with four major interstate highways converging in the city, and a fifth interstate loop around it. Dallas developed as a strong industrial and financial center, and a major inland port, due to the convergence of major railroad lines, interstate highways, and the construction of Dallas/Fort Worth International Airport, one of the largest and busiest airports in the world.[14]"
},

{
    name: "Austin",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Austin_Evening.jpg/1200px-Austin_Evening.jpg ",
    description:  "Dallas (/ˈdæləs/) is a city in the U.S. state of Texas. It is the most populous city in the Dallas–Fort Worth metroplex, which is the fourth most populous metropolitan area in the United States. The city's population ranks ninth in the U.S. and third in Texas after Houston and San Antonio.[8][9] The city's prominence arose from its historical importance as a center for the oil and cotton industries, and its position along numerous railroad lines. The bulk of the city is in Dallas County, of which it is the county seat; however, sections of the city are located in Collin, Denton, Kaufman, and Rockwall counties. According to the 2010 United States Census, the city had a population of 1,197,816. The United States Census Bureau's estimate for the city's population increased to 1,317,929 as of July 1, 2016.[10] Dallas is one of the fastest-growing cities in the United States. From 2010 to 2016, Dallas recorded the highest net domestic migration in the country, in excess of 300,000.[11] Overall, the Dallas–Fort Worth metro area had the second largest population increase among metro areas in the U.S., which recorded a population of 7,233,323 as of July 1, 2016, an increase of 807,000 people since the 2010 census.[12] Located in North Texas, Dallas is the main core of the largest metropolitan area in the South and the largest inland metropolitan area in the United States that lacks any navigable link to the sea.[13] Dallas and nearby Fort Worth were developed due to the construction of major railroad lines through the area allowing access to cotton, cattle, and later oil in North and East Texas. The construction of the Interstate Highway System reinforced Dallas's prominence as a transportation hub with four major interstate highways converging in the city, and a fifth interstate loop around it. Dallas developed as a strong industrial and financial center, and a major inland port, due to the convergence of major railroad lines, interstate highways, and the construction of Dallas/Fort Worth International Airport, one of the largest and busiest airports in the world.[14]"
}
    ]

function seeds()
{

Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("campgrounds removed sucessfully");
        
                data.forEach(function(seed){
                Campground.create(seed , function(err, data){
                if(err){
                    console.log(err);
                }else{
                    console.log("campground added");
                    //comment creation
                    Comment.create(
                        {
                            text : " WOW Love this place",
                            author: "Suraj"
                        },function(err, comment){
                            if(err){
                                console.log(err);
                            }else{
                                data.comments.push(comment);
                                data.save();
                                console.log("created new comment");
                            }
                        });
                    
                }
                
            });
        });
    }
    
});
}

 






module.exports = seeds;