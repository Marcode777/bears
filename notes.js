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

