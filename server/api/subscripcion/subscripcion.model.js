'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubscripcionSchema = new Schema({
  estado_subscripcion: String,
  precio_subscripcion: Number,
  active: Boolean
});

module.exports = mongoose.model('Subscripcion', SubscripcionSchema);