const mongoose = require('mongoose');
//Creamos el Schema

const CardsSechema = new mongoose.Schema({
   gmail: { type:String, require: true } ,
   url: String
});

module.exports = mongoose.model('Cards', CardsSechema)