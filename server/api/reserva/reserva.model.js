'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReservaSchema = new Schema({
  prioridad: String,
  fecha_limite: {type: Date},
  fecha_reserva: {type: Date},
  active: Boolean
});

module.exports = mongoose.model('Reserva', ReservaSchema);