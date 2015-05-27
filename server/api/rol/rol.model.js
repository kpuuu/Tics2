'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RolSchema = new Schema({
  nombre_rol: String,
  active: Boolean
});

module.exports = mongoose.model('Rol', RolSchema);