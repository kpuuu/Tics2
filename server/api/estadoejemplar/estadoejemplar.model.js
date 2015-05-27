'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EstadoejemplarSchema = new Schema({
  nombre_estado_ejemplar: String,
  active: Boolean
});

module.exports = mongoose.model('Estadoejemplar', EstadoejemplarSchema);