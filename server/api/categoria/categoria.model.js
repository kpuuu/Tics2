'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategoriaSchema = new Schema({
  nombre_categoria: String,
  active: Boolean
});

module.exports = mongoose.model('Categoria', CategoriaSchema);