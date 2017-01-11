//BASE SETUP
// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser'); // configure app to use body-parser
var mongoose  = require('mongoose');

// this connects to our database
// keep in mind the code after mongoose.connect is demo code, so this code must changed to use our own database
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our databa

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // sets our port

// ROUTES FOR API
var router = express.Router(); //gets an instsnce of the express Router

// test route to make sure everything is working (acessed at GET http://localhost:8080/api)
router.get('/', function(req, res){
  res.json({message: "awwww yeah! welcome to our api!"});
});

// more routes for our API will happen here

//REGISTER OUR ROUTES 
// all of our routes will be prefixed with /api
app.use('/api', router)

//START THE SERVER
app.listen(port);
console.log("The Magic happens on port" + port);








