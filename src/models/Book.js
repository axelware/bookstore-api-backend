const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  preco: { type: Number, required: true },
  estoque: { type: Number, default: 0 }
});

module.exports = mongoose.model('Book', BookSchema);