'use strict';

var _ = require('lodash');
var Ejemplar = require('./ejemplar.model');

// Get list of ejemplars
exports.index = function(req, res) {
  Ejemplar.find(function (err, ejemplars) {
    if(err) { return handleError(res, err); }
    return res.json(200, ejemplars);
  });
};

// Get a single ejemplar
exports.show = function(req, res) {
  Ejemplar.findById(req.params.id, function (err, ejemplar) {
    if(err) { return handleError(res, err); }
    if(!ejemplar) { return res.send(404); }
    return res.json(ejemplar);
  });
};

// Creates a new ejemplar in the DB.
exports.create = function(req, res) {
  Ejemplar.create(req.body, function(err, ejemplar) {
    if(err) { return handleError(res, err); }
    return res.json(201, ejemplar);
  });
};

// Updates an existing ejemplar in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Ejemplar.findById(req.params.id, function (err, ejemplar) {
    if (err) { return handleError(res, err); }
    if(!ejemplar) { return res.send(404); }
    var updated = _.merge(ejemplar, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, ejemplar);
    });
  });
};

// Deletes a ejemplar from the DB.
exports.destroy = function(req, res) {
  Ejemplar.findById(req.params.id, function (err, ejemplar) {
    if(err) { return handleError(res, err); }
    if(!ejemplar) { return res.send(404); }
    ejemplar.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}