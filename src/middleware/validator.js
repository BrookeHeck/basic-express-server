const validator = (request, response, next) => {
  request.query.name ? next() : response.status(400).send('Bad Request');
};

module.exports = validator;