const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("home");
});


app.get("/booking", function(req, res){
    res.render("booking");
})


 

app.listen(3000, function(){
    console.log(`Server is running on port 4000`);
})
