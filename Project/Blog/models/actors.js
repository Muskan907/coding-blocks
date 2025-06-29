const mongoose = require('mongoose');

// 1. Schema
const { Schema } = mongoose;

const actorSchema = new Schema({
  name: String, 
  imageUrl: String,
  age:String
});

// 2. Associate Schema with Model
module.exports = mongoose.model('Actor', actorSchema);
