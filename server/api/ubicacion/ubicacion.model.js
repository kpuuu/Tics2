'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UbicacionSchema = new Schema({
  lugar_ubicacion: String,
  piso_ubicacion: String,
  active: Boolean
});

module.exports = mongoose.model('Ubicacion', UbicacionSchema);