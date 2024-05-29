// CONNECTION STRING FOR CONNECTION TO mongoDB:
// mongodb+srv://Cluster72767:<password>@cluster72767.ixnmbn4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster72767

// node IS THE SERVER.
// EXPRESS CONTAINS TOOLS THAT FACILITATE USING node.js AS A SERVER. IT'S A FRAMEWORK.
// INSTEAD OF USING IMPORT STATEMENTS, USE require TO INCLUDE AN OUTSIDE APP;

const express = require('express');
const expressApp = express();
const mongoose = require('mongoose');
const cors = require('cors');
const accountModel = require('./mongooseModel.js');

// THE FOLLOWING LINE ALLOWS express TO CONVERT DATA TO json FORMAT
expressApp.use(express.json());
expressApp.use(cors());

// THE connectDB FUNCTION WAS CREATED IN THE database.js FILE
const connectDB = require('./database.js')
connectDB();

// HERE IS THE API - IT IS JUST THE ROUTES FOR A GET, POST, DELETE REQUEST
expressApp.get('/', (request, response) => {
    const accounts = accountModel.find()
    response.json(accounts);
});

// STARTING A SERVER IS AS SIMPLE AS RUNNING A LISTENER...
const port = 3000;
expressApp.listen(port, () =>{
    console.log(`Server side is running on port`, port);
});