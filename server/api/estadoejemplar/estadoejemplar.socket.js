/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Estadoejemplar = require('./estadoejemplar.model');

exports.register = function(socket) {
  Estadoejemplar.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Estadoejemplar.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('estadoejemplar:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('estadoejemplar:remove', doc);
}