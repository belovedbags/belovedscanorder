var express = require("express");
var app = express();

var bodyParser = require('body-parser');
var methodOverride = require("method-override"); 
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(methodOverride("_method"));
//=====================
//      ROUTES
//=====================

app.get('/', function(req, res){

    res.render("home");

})

app.listen(process.env.PORT || 3000, function (err){
    console.log('server started");

})