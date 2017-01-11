// express is the Node framework
// mongoose is the ORM we will use to communicate with our MongoDB database
// body-parser will let us pull POST content from our HTTP request so that it can do things like create a bear

// npm will now pull in all the packages defined into a node_modules folder in our project.
// npm is Node’s package manager that will bring in all the packages we defined in package.json. Simple and easy. Now that we have our packages, let’s go ahead and use them when we set up our API.
// We’ll be looking to our server.js file to setup our app since that’s the main file we declared in package.json.

//SETTING UP OUR SERVER SERVER.JS
//Node will look here when starting the application so that it will know how we want to configure our application and API.
//We will start with the bear (get it?) essentials necessary to start up our application. We’ll keep this code clean and commented well so we understand exactly what’s going on every step of the way.

//Wow we did a lot there! It’s all very simple though so let’s walk through it a bit.
//Base Setup In our base setup, we pull in all the packages we pulled in using npm. We’ll grab express, define our app, get bodyParser and configure our app to use it. We can also set the port for our application.
//Routes for Our API This section will hold all of our routes. The structure for using the Express Router let’s us pull in an instance of the router. We can then define routes and then apply those routes to a root URL (in this case, API).
//Start our Server We’ll have our express app listen to the port we defined earlier. Then our application will be live and we can test it!

// STARTING OUR SERVER AND TESTING
//Let’s make sure that everything is working up to this point. We will start our Node app and then send a request to the one route we defined to make sure we get a response.
//Let’s start our server. From the command line, type:
// node server.js
// we should see a message in the command line saying "The Magic happens on port 8080"

//Now that we know our application is up and running, let’s test it.
//TESTING OUR API USING POSTMAN
//Postman will help us test our API. It will basically send HTTP requests to a URL of our choosing. We can even pass in parameters (which we will soon) and authentication (which we won’t need for this tutorial).
//Open up Postman and let’s walk through how to use it.

//All you have to do is enter your request URL, select an HTTP verb, and click Send. Simple enough right?
//Here’s the moment we’ve been waiting for. Does our application work the way we configured it? Enter http://localhost:8080/api into the URL. GET is what we want since we just want to get data. Now click Send.

//Sweet! We got back exactly what we wanted. Now we know we can serve information to requests. Let’s wire up our database so we can start performing CRUD operations on some bears.


//# DATABASE AND BEAR MODEL
// We’ll keep this short and sweet so that we can get to the fun part of building the API routes. All we need to do is create a MongoDB database and have our application connect to it. We will also need to create a bear mongoose model so we can use mongoose to interact with our database.

// CREATING OUR DATABASE AND CONNECTING
// We will be using a database provided by Modulus. *****You can definitely create your own database and use it locally***** or use the awesome Mongolab. All you really need is a URI like below so that your application can connect.
// Once you have your database created and have the URI to connect to, let’s add it to our application. In server.js in the Base Setup section, let’s add these two lines.
// // server.js
// // BASE SETUP
// // =============================================================================
// ...
// var mongoose   = require('mongoose');
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database
// ...

//That will grab the mongoose package and connect to our remote database hosted by Modulus. Now that we are connected to our database, let’s create a mongoose model to handle our bears.
//BEAR MODEL APP/MODELS/BEAR.JS
//Since the model won’t be the focus of this tutorial, we’ll just create a model and provide our bears with a name field. That’s it. Let’s create that file and define the model.
// app/models/bear.js
//var mongoose     = require('mongoose');
//var Schema       = mongoose.Schema;
//var BearSchema   = new Schema({
//    name: String
//});
//module.exports = mongoose.model('Bear', BearSchema);


//With that file created, let’s pull it into our server.js so that we can use it within our application. We’ll add one more line to that file.
// server.js
// BASE SETUP
// =============================================================================
//...
//var Bear     = require('./app/models/bear');
//...
//Now our entire application is ready and wired up so we can start building out our routes. These routes will define our API and the main reason why this tutorial exists. Moving on!


//# Express Router and Routes
// We will use an instance of the Express Router to handle all of our routes. Here is an overview of the routes we will require, what they will do, and the HTTP Verb used to access it.
// Route HTTP Verb Description
// /api/bears  GET Get all the bears.
// /api/bears  POST  Create a bear.
// /api/bears/:bear_id GET Get a single bear.
// /api/bears/:bear_id PUT Update a bear with new info.
// /api/bears/:bear_id DELETE  Delete a bear.
// This will cover the basic routes needed for an API. This also keeps to a good format where we have kept the actions we need to execute (GET, POST, PUT, and DELETE) as HTTP verbs.



//# Route Middleware
// We’ve already defined our first route and seen it in action. The Express Router gives us a great deal of flexibility in definining our routes.
// Let’s say that we wanted something to happen every time a request was sent to our API. For this example we are just going to console.log() a message. Let’s add that middleware now.
// // server.js
// ...
// // ROUTES FOR OUR API
// // =============================================================================
// var router = express.Router();              // get an instance of the express Router
// // middleware to use for all requests
// router.use(function(req, res, next) {
//     // do logging
//     console.log('Something is happening.');
//     next(); // make sure we go to the next routes and don't stop here
// });
// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });
// // more routes for our API will happen here
// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// app.use('/api', router);
// ...
// All we needed to do to declare that middleware was to use router.use(function()). The order of how we define the parts of our router is very important. They will run in the order that they are listed and thanks to the changes in Express 4.0, we won’t have problems doing this like in Express 3.0. Everything will run in the correct order.
// We are sending back information as JSON data. This is standard for an API and will help the people using our API to use our data.
// *****We will also add next() to indicate to our application that it should continue to the other routes. This is important because our application would stop at this middleware without it.*****
// Middleware Uses Using middleware like this can be very powerful. We can do validations to make sure that everything coming from a request is safe and sound. We can throw errors here in case something is wrong. We can do some extra logging for analytics or any statistics we’d like to keep. There are many possibilities here. Go wild.

//TESTING OUR MIDDLEWARE
//Now when we send a request to our application using Postman, Something is happening will be logged to our Node console (the command line).
//With middleware, we can do awesome things to requests coming into our API. We will probably want to make sure that the user is authenticated to access our API. We’ll go over that in a future article, but for now let’s just log something to the console with our middleware.



//# CREATING THE BASIC ROUTES
// We will now create the routes to handle getting all the bears and creating a bear. This will both be handled using the /api/bears route. We’ll look at creating a bear first so that we have bears to work with.
// CREATING A BEAR POST /API/BEARS
// We will add the new route to handle POST and then test it using Postman.
// // server.js
// ...
// // ROUTES FOR OUR API
// // =============================================================================
// ... // <-- route middleware and first route are here
// // more routes for our API will happen here
// // on routes that end in /bears
// // ----------------------------------------------------
// router.route('/bears')
//     // create a bear (accessed at POST http://localhost:8080/api/bears)
//     .post(function(req, res) {       
//         var bear = new Bear();      // create a new instance of the Bear model
//         bear.name = req.body.name;  // set the bears name (comes from the request)
//         // save the bear and check for errors
//         bear.save(function(err) {
//             if (err)
//                 res.send(err);
//             res.json({ message: 'Bear created!' });
//         });       
//     });
// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// app.use('/api', router);
// ...
// Now we have created the POST route for our application. We will use Express’s router.route() to handle multiple routes for the same URI. We are able to handle all the requests that end in /bears.

// LET'S LOOK AT POSTMAN NOW TO CREATE OUR BEAR
//Notice that we are sending the name data as x-www-form-urlencoded. This will send all of our data to the Node server as query strings.
//We get back a successful message that our bear has been created. Let’s handle the API route to get all the bears so that we can see the bear that just came into existence.









