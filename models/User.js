const mongoose = require('mongoose');
//Creamos el Schema

const User = new mongoose.Schema({
   gmail: { type:String, require: true } ,
   url: String
});

module.exports = mongoose.model('user', User)