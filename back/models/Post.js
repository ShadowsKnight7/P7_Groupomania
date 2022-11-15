const mongoose = require('mongoose');

// Création du shéma "post" pour la BDD MongoDB
const postSchema = mongoose.Schema({
  userId: {type: String, required: true},
  name: {type: String,required: true},
  title: {type: String,required: true,trim: true},
  imageUrl: {type: String},
  like: {type: Number,required: true},
});

module.exports = mongoose.model('post', postSchema);