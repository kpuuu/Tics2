'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PrestamoSchema = new Schema({
  costo_total: Number,
  fecha_prestamo: {type: Date},
  fecha_devolucion: {type: Date},
  fecha_estimada_devo: {type: Date},
  active: Boolean
});

module.exports = mongoose.model('Prestamo', PrestamoSchema);