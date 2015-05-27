'use strict';

var _ = require('lodash');
var Estadoprestamo = require('./estadoprestamo.model');

// Get list of estadoprestamos
exports.index = function(req, res) {
  Estadoprestamo.find(function (err, estadoprestamos) {
    if(err) { return handleError(res, err); }
    return res.json(200, estadoprestamos);
  });
};

// Get a single estadoprestamo
exports.show = function(req, res) {
  Estadoprestamo.findById(req.params.id, function (err, estadoprestamo) {
    if(err) { return handleError(res, err); }
    if(!estadoprestamo) { return res.send(404); }
    return res.json(estadoprestamo);
  });
};

// Creates a new estadoprestamo in the DB.
exports.create = function(req, res) {
  Estadoprestamo.create(req.body, function(err, estadoprestamo) {
    if(err) { return handleError(res, err); }
    return res.json(201, estadoprestamo);
  });
};

// Updates an existing estadoprestamo in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Estadoprestamo.findById(req.params.id, function (err, estadoprestamo) {
    if (err) { return handleError(res, err); }
    if(!estadoprestamo) { return res.send(404); }
    var updated = _.merge(estadoprestamo, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, estadoprestamo);
    });
  });
};

// Deletes a estadoprestamo from the DB.
exports.destroy = function(req, res) {
  Estadoprestamo.findById(req.params.id, function (err, estadoprestamo) {
    if(err) { return handleError(res, err); }
    if(!estadoprestamo) { return res.send(404); }
    estadoprestamo.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}