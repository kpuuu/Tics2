/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Ejemplar = require('./ejemplar.model');

exports.register = function(socket) {
  Ejemplar.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Ejemplar.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('ejemplar:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('ejemplar:remove', doc);
}