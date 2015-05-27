'use strict';

var _ = require('lodash');
var Subscripcion = require('./subscripcion.model');

// Get list of subscripcions
exports.index = function(req, res) {
  Subscripcion.find(function (err, subscripcions) {
    if(err) { return handleError(res, err); }
    return res.json(200, subscripcions);
  });
};

// Get a single subscripcion
exports.show = function(req, res) {
  Subscripcion.findById(req.params.id, function (err, subscripcion) {
    if(err) { return handleError(res, err); }
    if(!subscripcion) { return res.send(404); }
    return res.json(subscripcion);
  });
};

// Creates a new subscripcion in the DB.
exports.create = function(req, res) {
  Subscripcion.create(req.body, function(err, subscripcion) {
    if(err) { return handleError(res, err); }
    return res.json(201, subscripcion);
  });
};

// Updates an existing subscripcion in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Subscripcion.findById(req.params.id, function (err, subscripcion) {
    if (err) { return handleError(res, err); }
    if(!subscripcion) { return res.send(404); }
    var updated = _.merge(subscripcion, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, subscripcion);
    });
  });
};

// Deletes a subscripcion from the DB.
exports.destroy = function(req, res) {
  Subscripcion.findById(req.params.id, function (err, subscripcion) {
    if(err) { return handleError(res, err); }
    if(!subscripcion) { return res.send(404); }
    subscripcion.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}