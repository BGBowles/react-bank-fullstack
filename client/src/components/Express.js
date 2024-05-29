// TO RUN THIS EXPRESS APP, GO TO THE TERMINAL AND ENTER: node Express
// BETTER YET, USE nodemon. AT CLI, USE: npx nodemon filename

const express = require('express');

// HTTP METHODS (POST, GET, PUT, DELETE) ARE INCLUDED IN express
const ExpressApp = express();

// Application will listen on 4000 or on whatever port is assigned in the environment (PROCESS.ENV.PORT).
const portDefault = 4000;
ExpressApp.listen(process.env.port || portDefault, function(){
    console.log('ExpressApp is Running. Now listening for requests on port',portDefault);
});

// NEED REQUEST HANDLERS FOR WHATEVER HTTP METHODS ARE NEEDED IN THE APP
// 1. SEND A GET REQUEST.
ExpressApp.get('/', function(request, response){
    console.log('A GET request has been made.')
    // 2. END THE REQUEST WITH A RESPONSE.
    response.send({ username: "AccountTest"});
})