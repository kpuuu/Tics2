/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Rol = require('./rol.model');

exports.register = function(socket) {
  Rol.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Rol.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('rol:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('rol:remove', doc);
}