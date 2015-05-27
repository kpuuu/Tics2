/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Estadoprestamo = require('./estadoprestamo.model');

exports.register = function(socket) {
  Estadoprestamo.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Estadoprestamo.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('estadoprestamo:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('estadoprestamo:remove', doc);
}