const mongoose = require('mongoose');

// DEFINE THE SCHEMA FOR WHAT INFORMATION WILL BE STORED IN EACH DOCUMENT
const accountSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    balance: Number
});

// EQUATE THE MODEL WITH THE SCHEMA
const accountModel = mongoose.model("Account", accountSchema);

// EXPORT THE MODEL
module.exports = accountModel;