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
const send500 = require('./error-handlers/500');

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

// server routes
app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server');
});

app.get('/person', validator, logger, readName(people));

// server error handling
app.get('*', send404);
app.use(send500);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('App is running on port :: ' + port);
    });
  },
  app,
};