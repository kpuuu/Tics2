'use strict';

var _ = require('lodash');
var Ubicacion = require('./ubicacion.model');

// Get list of ubicacions
exports.index = function(req, res) {
  Ubicacion.find(function (err, ubicacions) {
    if(err) { return handleError(res, err); }
    return res.json(200, ubicacions);
  });
};

// Get a single ubicacion
exports.show = function(req, res) {
  Ubicacion.findById(req.params.id, function (err, ubicacion) {
    if(err) { return handleError(res, err); }
    if(!ubicacion) { return res.send(404); }
    return res.json(ubicacion);
  });
};

// Creates a new ubicacion in the DB.
exports.create = function(req, res) {
  Ubicacion.create(req.body, function(err, ubicacion) {
    if(err) { return handleError(res, err); }
    return res.json(201, ubicacion);
  });
};

// Updates an existing ubicacion in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Ubicacion.findById(req.params.id, function (err, ubicacion) {
    if (err) { return handleError(res, err); }
    if(!ubicacion) { return res.send(404); }
    var updated = _.merge(ubicacion, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, ubicacion);
    });
  });
};

// Deletes a ubicacion from the DB.
exports.destroy = function(req, res) {
  Ubicacion.findById(req.params.id, function (err, ubicacion) {
    if(err) { return handleError(res, err); }
    if(!ubicacion) { return res.send(404); }
    ubicacion.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}