/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Subscripcion = require('./subscripcion.model');

exports.register = function(socket) {
  Subscripcion.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Subscripcion.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('subscripcion:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('subscripcion:remove', doc);
}