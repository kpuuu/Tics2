'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EjemplarSchema = new Schema({
  costo_ejemplar: Number,
  fecha_compra_ejemplar: {type: Date},
  active: Boolean
});

module.exports = mongoose.model('Ejemplar', EjemplarSchema);