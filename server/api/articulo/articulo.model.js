'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticuloSchema = new Schema({
  titulo: String,
  categoria: String,
  ano: Number,
  autor: String,
  id_proveedor: String,
  precio: Number,
  ubicacion: String,
  diasprestamo: Number,
  marca: String,
  categoria2: String
  
});

module.exports = mongoose.model('Articulo', ArticuloSchema);