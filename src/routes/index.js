const express = require('express');

const livros = require('./livrosRouter');

module.exports = (app) => {
  app.use(
    express.json(),
    livros,
  );
};
