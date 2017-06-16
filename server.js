var express     = require('express'),
    app         = express(),
    bodyParser  = require("body-parser");

//node.js body parsing middleware (used for GET requests on the ejs pages)
app.use(bodyParser.urlencoded({extended: true}));
//use custom files (css, js, img)
app.use(express.static(__dirname + '/views'));
//setup for ejs file types
app.set("view engine", "ejs");


//TEST
app.get("/test", function(req, res){
    res.render("test");
});

//INDEX
app.get("/", function(req, res){
    res.render("landing");
});

//STAFF
app.get("/staff", function(req, res){
    res.render("staff");
});

//STEM CELLS
app.get("/stemcells", function(req, res){
    res.render("stemcells");
});

//PRP
app.get("/prp", function(req, res){
    res.render("prp");
});

//KNEE
app.get("/knee", function(req, res){
    res.render("knee");
});

//HIP
app.get("/hip", function(req, res){
    res.render("hip");
});

//SHOULDER
app.get("/shoulder", function(req, res){
    res.render("shoulder");
});

//ELBOW
app.get("/elbow", function(req, res){
    res.render("elbow");
});

//CONTACT
app.get("/contact", function(req, res){
    res.render("contact");
});

//REVIEWS
app.get("/reviews", function(req, res){
    res.render("reviews");
});

//Thank You
app.get("/thankyou", function(req, res){
    res.render("thankyou");
});


//server inititiation and confirmation message in terminal
app.listen(80, function(){
    console.log("The Stem Cell server has started!");
});