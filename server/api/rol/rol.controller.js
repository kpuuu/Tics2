'use strict';

var _ = require('lodash');
var Rol = require('./rol.model');

// Get list of rols
exports.index = function(req, res) {
  Rol.find(function (err, rols) {
    if(err) { return handleError(res, err); }
    return res.json(200, rols);
  });
};

// Get a single rol
exports.show = function(req, res) {
  Rol.findById(req.params.id, function (err, rol) {
    if(err) { return handleError(res, err); }
    if(!rol) { return res.send(404); }
    return res.json(rol);
  });
};

// Creates a new rol in the DB.
exports.create = function(req, res) {
  Rol.create(req.body, function(err, rol) {
    if(err) { return handleError(res, err); }
    return res.json(201, rol);
  });
};

// Updates an existing rol in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Rol.findById(req.params.id, function (err, rol) {
    if (err) { return handleError(res, err); }
    if(!rol) { return res.send(404); }
    var updated = _.merge(rol, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, rol);
    });
  });
};

// Deletes a rol from the DB.
exports.destroy = function(req, res) {
  Rol.findById(req.params.id, function (err, rol) {
    if(err) { return handleError(res, err); }
    if(!rol) { return res.send(404); }
    rol.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}