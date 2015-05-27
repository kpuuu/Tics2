'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProveedorSchema = new Schema({
  nombre_representante: String,
  direccion: String,
  razon_social: String,
  rut_proveedor: String,
  telefono_proveedor: Number,
  correo_proveedor: String,
  web_proveedor: String,
  active: Boolean
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);