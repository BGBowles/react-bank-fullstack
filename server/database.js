// CREATE A DATABASE - USE MONGOOSE WHICH WILL CONNECT WITH mongodb

// mongodb+srv://Cluster72767:<password>@cluster72767.ixnmbn4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster72767

const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { exit } = require('process');
const uri = 'mongodb+srv://Cluster72767:Databse2024@cluster72767.ixnmbn4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster72767';

// THIS FUNCTION ESTABLISHES THE CONNECTION BETWEEN mongoose AND mongoDB
const connectDB = async() => {
    try {
        const path = await mongoose.connect(uri);
        console.log(`MongoDB is connected. Connection Detail: ${path.connection.host}`);
    }
    
    catch (error){
        console.error(error);
        process.exit(1);
    }
};

const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    // insert code goes here
    // display the results of your operation
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// MAKE THE connectDB FUNCTION AVAILABLE TO OTHER FILES (IT'S USED IN index.js)
module.exports = connectDB;