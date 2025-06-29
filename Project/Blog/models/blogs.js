const mongoose = require('mongoose');

// 1. Schema
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  description: String,
  actor:{type: Schema.Types.ObjectId,ref: 'Actor'}
});

// 2. Associate Schema with Model
module.exports = mongoose.model('Blog', blogSchema);
