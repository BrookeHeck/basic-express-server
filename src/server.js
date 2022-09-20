'use strict';

// dependencies
const express = require('express');
const cors = require('cors');

// my middleware
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

// my modules
const readName = require('./modules/readName');

// my error messages
const send404 = require('./error-handlers/404');

// no database, so using this to store data
const people = [
  {
    'id': 1,
    'name': 'Brooke',
  },
  {
    'id': 2,
    'name': 'Jane',
  },
  {
    'id': 3,
    'name': 'John',
  },
];

// my application
const app = express();
app.use(cors());

app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server');
});

app.get('/person', validator, logger, readName(people));

app.get('*', send404);

app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
  next();
});

module.exports = app;