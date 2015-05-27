/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Prestamo = require('./prestamo.model');

exports.register = function(socket) {
  Prestamo.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Prestamo.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('prestamo:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('prestamo:remove', doc);
}