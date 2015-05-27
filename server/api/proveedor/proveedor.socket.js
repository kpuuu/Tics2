/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Proveedor = require('./proveedor.model');

exports.register = function(socket) {
  Proveedor.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Proveedor.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('proveedor:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('proveedor:remove', doc);
}