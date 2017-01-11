//BASE SETUP
// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser'); // configure app to use body-parser
var mongoose  = require('mongoose');
// mongoose.Promise = global.Promise; // this line had to be added because mongoose is deprecated


// this connects to our database
// keep in mind the code after mongoose.connect is demo code, so this code must changed to use our own database
// i signed up with mLab and created a free account, the URL provided is this: mongodb://<dbuser>:<dbpassword>@ds159978.mlab.com:59978/bears but with username is now:    mongodb://thebeargrylls:grylls@ds159978.mlab.com:59978/bears
// mongoose.connect('mongodb://localhost:8080/bears'); // connect to our databa
// this will let us get the data from a POST
var Bear = require('./models/bear');  // so the filepath was a bit challenging here. Apparently with nodejs, you have to specify the path FROM your current directory. So the filepath that worked was './models/bear'
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // sets our port

// ROUTES FOR API
var router = express.Router(); //gets an instsnce of the express Router

//MIDDLEWARE TO USE FOR ALL REQUESTS
router.use(function(req, res, next){
//do logging
  console.log("Something is happening");
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (acessed at GET http://localhost:8080/api)
router.get('/', function(req, res){
  res.json({message: "awwww yeah! welcome to our api!"});
});

// more routes for our API will happen here
router.route('/bears')
//create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function(req, res){
    var bear = new Bear(); // create a new instance of the Bear model
    bear.name = req.body.name; // set the bear's name (comes from the request)
  
  // save the bear and check for errors
  bear.save(function(err){
    if (err)
      res.send(err);

    res.json({message: 'Bear created!'})
  });

});

//REGISTER OUR ROUTES 
// all of our routes will be prefixed with /api
app.use('/api', router)

//START THE SERVER
app.listen(port);
console.log("The Magic happens on port" + port);








