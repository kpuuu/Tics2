'use strict';

var _ = require('lodash');
var Categoria = require('./categoria.model');

// Get list of categorias
exports.index = function(req, res) {
  Categoria.find(function (err, categorias) {
    if(err) { return handleError(res, err); }
    return res.json(200, categorias);
  });
};

// Get a single categoria
exports.show = function(req, res) {
  Categoria.findById(req.params.id, function (err, categoria) {
    if(err) { return handleError(res, err); }
    if(!categoria) { return res.send(404); }
    return res.json(categoria);
  });
};

// Creates a new categoria in the DB.
exports.create = function(req, res) {
  Categoria.create(req.body, function(err, categoria) {
    if(err) { return handleError(res, err); }
    return res.json(201, categoria);
  });
};

// Updates an existing categoria in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Categoria.findById(req.params.id, function (err, categoria) {
    if (err) { return handleError(res, err); }
    if(!categoria) { return res.send(404); }
    var updated = _.merge(categoria, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, categoria);
    });
  });
};

// Deletes a categoria from the DB.
exports.destroy = function(req, res) {
  Categoria.findById(req.params.id, function (err, categoria) {
    if(err) { return handleError(res, err); }
    if(!categoria) { return res.send(404); }
    categoria.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}