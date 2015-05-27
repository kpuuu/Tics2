'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EstadoprestamoSchema = new Schema({
  nombre_estado_prestamo: String,
  active: Boolean
});

module.exports = mongoose.model('Estadoprestamo', EstadoprestamoSchema);