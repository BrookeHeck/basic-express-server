'use strict';

const send500 = (error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
};

module.exports = send500;