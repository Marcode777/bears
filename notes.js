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