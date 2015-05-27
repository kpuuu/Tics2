'use strict';

var _ = require('lodash');
var Prestamo = require('./prestamo.model');

// Get list of prestamos
exports.index = function(req, res) {
  Prestamo.find(function (err, prestamos) {
    if(err) { return handleError(res, err); }
    return res.json(200, prestamos);
  });
};

// Get a single prestamo
exports.show = function(req, res) {
  Prestamo.findById(req.params.id, function (err, prestamo) {
    if(err) { return handleError(res, err); }
    if(!prestamo) { return res.send(404); }
    return res.json(prestamo);
  });
};

// Creates a new prestamo in the DB.
exports.create = function(req, res) {
  Prestamo.create(req.body, function(err, prestamo) {
    if(err) { return handleError(res, err); }
    return res.json(201, prestamo);
  });
};

// Updates an existing prestamo in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Prestamo.findById(req.params.id, function (err, prestamo) {
    if (err) { return handleError(res, err); }
    if(!prestamo) { return res.send(404); }
    var updated = _.merge(prestamo, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, prestamo);
    });
  });
};

// Deletes a prestamo from the DB.
exports.destroy = function(req, res) {
  Prestamo.findById(req.params.id, function (err, prestamo) {
    if(err) { return handleError(res, err); }
    if(!prestamo) { return res.send(404); }
    prestamo.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}