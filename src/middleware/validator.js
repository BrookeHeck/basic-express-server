const validator = (request, response, next) => {
  request.query.name ? next() : next('No name in query');
};

module.exports = validator;