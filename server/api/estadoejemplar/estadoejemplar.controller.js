'use strict';

var _ = require('lodash');
var Estadoejemplar = require('./estadoejemplar.model');

// Get list of estadoejemplars
exports.index = function(req, res) {
  Estadoejemplar.find(function (err, estadoejemplars) {
    if(err) { return handleError(res, err); }
    return res.json(200, estadoejemplars);
  });
};

// Get a single estadoejemplar
exports.show = function(req, res) {
  Estadoejemplar.findById(req.params.id, function (err, estadoejemplar) {
    if(err) { return handleError(res, err); }
    if(!estadoejemplar) { return res.send(404); }
    return res.json(estadoejemplar);
  });
};

// Creates a new estadoejemplar in the DB.
exports.create = function(req, res) {
  Estadoejemplar.create(req.body, function(err, estadoejemplar) {
    if(err) { return handleError(res, err); }
    return res.json(201, estadoejemplar);
  });
};

// Updates an existing estadoejemplar in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Estadoejemplar.findById(req.params.id, function (err, estadoejemplar) {
    if (err) { return handleError(res, err); }
    if(!estadoejemplar) { return res.send(404); }
    var updated = _.merge(estadoejemplar, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, estadoejemplar);
    });
  });
};

// Deletes a estadoejemplar from the DB.
exports.destroy = function(req, res) {
  Estadoejemplar.findById(req.params.id, function (err, estadoejemplar) {
    if(err) { return handleError(res, err); }
    if(!estadoejemplar) { return res.send(404); }
    estadoejemplar.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}