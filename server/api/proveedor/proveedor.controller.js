'use strict';

var _ = require('lodash');
var Proveedor = require('./proveedor.model');

// Get list of proveedors
exports.index = function(req, res) {
  Proveedor.find(function (err, proveedors) {
    if(err) { return handleError(res, err); }
    return res.json(200, proveedors);
  });
};

// Get a single proveedor
exports.show = function(req, res) {
  Proveedor.findById(req.params.id, function (err, proveedor) {
    if(err) { return handleError(res, err); }
    if(!proveedor) { return res.send(404); }
    return res.json(proveedor);
  });
};

// Creates a new proveedor in the DB.
exports.create = function(req, res) {
  Proveedor.create(req.body, function(err, proveedor) {
    if(err) { return handleError(res, err); }
    return res.json(201, proveedor);
  });
};

// Updates an existing proveedor in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Proveedor.findById(req.params.id, function (err, proveedor) {
    if (err) { return handleError(res, err); }
    if(!proveedor) { return res.send(404); }
    var updated = _.merge(proveedor, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, proveedor);
    });
  });
};

// Deletes a proveedor from the DB.
exports.destroy = function(req, res) {
  Proveedor.findById(req.params.id, function (err, proveedor) {
    if(err) { return handleError(res, err); }
    if(!proveedor) { return res.send(404); }
    proveedor.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}